/* ============================================================
 * games.js —— 《小学奥数举一反三》PWA 三个趣味小游戏
 *  1) 24点   Games.render24(el, back)
 *  2) 数独   Games.renderSudoku(el, back)   四宫/六宫/九宫
 *  3) 火柴棒 Games.renderMatch(el, back)    算式变换 + 图形变换
 * 原生 JS，无外部库/框架/图片，全部图形内联 SVG。
 * 样式只用 index.html :root 里已有的 CSS 变量。
 * ============================================================ */

/* ---------- 工具 ---------- */
function gmAnswer(){
  try{ if(window.AppHooks && typeof window.AppHooks.answer === 'function') window.AppHooks.answer(); }catch(e){}
}
function gmRI(a,b){ return a + Math.floor(Math.random()*(b-a+1)); }
function gmShuffle(arr){
  for(var i=arr.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=arr[i]; arr[i]=arr[j]; arr[j]=t;
  }
  return arr;
}
function gmEsc(s){ return String(s); }

/* ============================================================
 * ensureCss —— 首次调用注入一个 <style>
 * ============================================================ */
var gmCssDone = false;
function Games_ensureCss(){
  if(gmCssDone) return;
  gmCssDone = true;
  var css = [
'.gm-wrap{max-width:600px;margin:0 auto;padding:12px;box-sizing:border-box;color:var(--ink);font-size:15px;line-height:1.5;}',
'.gm-wrap *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}',
'.gm-h{margin:4px 0 10px;font-size:19px;color:var(--ink);}',
'.gm-top{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px;}',
'.gm-sp{flex:1;}',
'.gm-btn{border:none;background:var(--teal);color:#FCFDF9;border-radius:12px;min-height:42px;min-width:42px;padding:0 14px;font-size:15px;cursor:pointer;}',
'.gm-btn:active{background:var(--teal-dark);}',
'.gm-btn.ghost{background:var(--card);color:var(--teal-dark);border:1px solid var(--line);}',
'.gm-btn.warn{background:var(--amber);}',
'.gm-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}',
'.gm-center{display:flex;justify-content:center;}',
'.gm-msg{margin-top:10px;text-align:center;min-height:26px;font-weight:600;font-size:16px;}',
'.gm-msg.ok{color:var(--green);}',
'.gm-msg.bad{color:var(--red);}',
'.gm-msg.tip{color:var(--ink-soft);font-weight:400;}',
/* 游戏中心 */
'.gm-cards{display:grid;grid-template-columns:1fr;gap:12px;margin-top:10px;}',
'@media(min-width:480px){.gm-cards{grid-template-columns:repeat(3,1fr);}}',
'.gm-card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px 12px;cursor:pointer;text-align:center;}',
'.gm-card:hover{border-color:var(--teal);}',
'.gm-card h4{margin:8px 0 4px;font-size:16px;color:var(--ink);}',
'.gm-card p{margin:0;color:var(--ink-soft);font-size:12px;}',
/* 24点 */
'.gm-deck{display:flex;gap:10px;justify-content:center;margin:12px 0;flex-wrap:wrap;}',
'.gm-pcard{width:58px;height:82px;background:var(--card);border:1px solid var(--line);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:var(--blue);cursor:pointer;user-select:none;}',
'.gm-pcard small{font-size:11px;color:var(--ink-faint);font-weight:400;}',
'.gm-pcard.used{opacity:.28;cursor:default;}',
'.gm-expr{min-height:48px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:8px;display:flex;flex-wrap:wrap;gap:4px;align-items:center;font-size:20px;}',
'.gm-tok{padding:2px 7px;border-radius:8px;background:var(--amber-soft);cursor:pointer;}',
'.gm-pad{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:12px;}',
'.gm-op{width:50px;height:48px;font-size:20px;}',
'.gm-timer{font-variant-numeric:tabular-nums;color:var(--ink-soft);font-size:15px;}',
/* 数独 */
'.gm-grid{display:grid;gap:0;margin:12px auto;width:100%;max-width:380px;aspect-ratio:1;border:2px solid var(--ink);border-radius:6px;overflow:hidden;}',
'.gm-cell{display:flex;align-items:center;justify-content:center;font-size:20px;background:var(--card);cursor:pointer;position:relative;border-right:1px solid var(--line);border-bottom:1px solid var(--line);}',
'.gm-cell.given{color:var(--ink);font-weight:700;background:var(--paper);}',
'.gm-cell.sel{background:var(--cyan);}',
'.gm-cell.err{color:var(--red);}',
'.gm-cell.good{color:var(--green);}',
'.gm-cell .note{position:absolute;font-size:9px;color:var(--ink-faint);top:1px;left:2px;line-height:1.1;}',
'.gm-numpad{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:10px;}',
'.gm-diff{display:flex;gap:8px;justify-content:center;margin-top:6px;}',
/* 火柴棒 */
'.gm-board{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:8px;margin:10px 0;}',
'.gm-board svg{width:100%;height:auto;display:block;}',
'.gm-lvbar{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0;}',
'.gm-lv{min-width:34px;height:34px;border-radius:8px;border:1px solid var(--line);background:var(--card);cursor:pointer;color:var(--ink);}',
'.gm-lv.on{background:var(--teal);color:#FCFDF9;border-color:var(--teal);}',
'.gm-lv.done{background:var(--green);color:#FCFDF9;border-color:var(--green);}',
'.gm-mod{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0;}',
'.gm-mod .gm-btn{min-height:36px;font-size:14px;}',
'.gm-mod .gm-btn.on{background:var(--ink);}'
  ].join('\n');
  var st = document.createElement('style');
  st.setAttribute('data-games','1');
  st.textContent = css;
  document.head.appendChild(st);
}

/* ============================================================
 * 游戏中心
 * ============================================================ */
function Games_renderCenter(el, go){
  Games_ensureCss();
  var icon24 = "<svg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='10' width='22' height='30' rx='4' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><rect x='20' y='6' width='22' height='30' rx='4' fill='#FCFDF9' stroke='#E9A23B' stroke-width='2'/><text x='19' y='30' font-size='13' fill='#3E6FB2' text-anchor='middle' font-weight='bold'>24</text></svg>";
  var iconSd = "<svg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='36' height='36' rx='4' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><line x1='20' y1='8' x2='20' y2='44' stroke='#DFE2D6' stroke-width='2'/><line x1='32' y1='8' x2='32' y2='44' stroke='#DFE2D6' stroke-width='2'/><line x1='8' y1='20' x2='44' y2='20' stroke='#DFE2D6' stroke-width='2'/><line x1='8' y1='32' x2='44' y2='32' stroke='#DFE2D6' stroke-width='2'/><circle cx='14' cy='14' r='3' fill='#E9A23B'/><circle cx='26' cy='26' r='3' fill='#3E6FB2'/></svg>";
  var iconMt = "<svg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='40' x2='38' y2='14' stroke='#E9A23B' stroke-width='4' stroke-linecap='round'/><circle cx='40' cy='12' r='5' fill='#D8664E'/><line x1='14' y1='16' x2='30' y2='30' stroke='#E9A23B' stroke-width='4' stroke-linecap='round'/><circle cx='32' cy='32' r='5' fill='#D8664E'/></svg>";
  el.innerHTML =
    '<div class="gm-wrap">' +
      '<h3 class="gm-h">🎮 数学小游戏</h3>' +
      '<p style="color:var(--ink-soft);margin:0 0 6px;">玩一玩，让大脑动起来！</p>' +
      '<div class="gm-cards">' +
        '<div class="gm-card" data-route="#/game/24">' + icon24 + '<h4>24点</h4><p>用四张牌凑出 24</p></div>' +
        '<div class="gm-card" data-route="#/game/sudoku">' + iconSd + '<h4>数独</h4><p>四宫 / 六宫 / 九宫</p></div>' +
        '<div class="gm-card" data-route="#/game/match">' + iconMt + '<h4>火柴棒</h4><p>移一移，等式变变变</p></div>' +
      '</div>' +
    '</div>';
  var cards = el.querySelectorAll('.gm-card');
  for(var i=0;i<cards.length;i++){
    (function(c){
      c.addEventListener('click', function(){ go(c.getAttribute('data-route')); });
    })(cards[i]);
  }
}

/* ============================================================
 * 游戏一：24点
 * ============================================================ */
/* 穷举求解：返回一个成立的算式字符串，无解返回 null */
function gmSolve24(items){
  if(items.length === 1){
    if(Math.abs(items[0].v - 24) < 1e-6) return items[0].s;
    return null;
  }
  for(var i=0;i<items.length;i++){
    for(var j=0;j<items.length;j++){
      if(i===j) continue;
      var a=items[i], b=items[j];
      var rest=[];
      for(var k=0;k<items.length;k++){ if(k!==i && k!==j) rest.push(items[k]); }
      var tryOps=[
        {v:a.v+b.v, s:'('+a.s+'+'+b.s+')'},
        {v:a.v-b.v, s:'('+a.s+'-'+b.s+')'},
        {v:a.v*b.v, s:'('+a.s+'×'+b.s+')'}
      ];
      if(Math.abs(b.v) > 1e-9) tryOps.push({v:a.v/b.v, s:'('+a.s+'÷'+b.s+')'});
      for(var t=0;t<tryOps.length;t++){
        var cand = rest.concat([{v:tryOps[t].v, s:tryOps[t].s}]);
        var r = gmSolve24(cand);
        if(r) return r;
      }
    }
  }
  return null;
}
/* token 序列求值：tokens=[{type:'num',val}|{type:'op',val}|{type:'lp'}|{type:'rp'}] */
function gmEvalTokens(tokens){
  var output=[], ops=[];
  var prec={'+':1,'-':1,'*':2,'/':2};
  for(var i=0;i<tokens.length;i++){
    var t=tokens[i];
    if(t.type==='num') output.push(t.val);
    else if(t.type==='lp') ops.push(t);
    else if(t.type==='rp'){
      while(ops.length && ops[ops.length-1].type!=='lp') output.push(ops.pop().val);
      if(!ops.length) return null;
      ops.pop();
    } else {
      while(ops.length && ops[ops.length-1].type!=='lp' && prec[ops[ops.length-1].val] >= prec[t.val]) output.push(ops.pop());
      ops.push(t);
    }
  }
  while(ops.length){
    var o=ops.pop();
    if(o.type==='lp'||o.type==='rp') return null;
    output.push(o.val);
  }
  var st=[];
  for(var j=0;j<output.length;j++){
    var x=output[j];
    if(typeof x==='number') st.push(x);
    else {
      if(st.length<2) return null;
      var b=st.pop(), a=st.pop(), r=0;
      if(x==='+') r=a+b; else if(x==='-') r=a-b; else if(x==='*') r=a*b;
      else { if(Math.abs(b)<1e-9) return null; r=a/b; }
      st.push(r);
    }
  }
  if(st.length!==1) return null;
  return st[0];
}
function gmCardLabel(v){
  if(v===1) return 'A'; if(v<=10) return String(v);
  if(v===11) return 'J'; if(v===12) return 'Q'; return 'K';
}
function Games_render24(el, back){
  Games_ensureCss();
  var timerId=null, seconds=0, st=null;

  function deal(){
    var nums=null;
    for(var t=0;t<400;t++){
      var cand=[gmRI(1,13),gmRI(1,13),gmRI(1,13),gmRI(1,13)];
      var sol=gmSolve24(cand.map(function(v){ return {v:v, s:String(v)}; }));
      if(sol){ nums=cand; break; }
    }
    st={ nums:nums, tokens:[], used:[false,false,false,false], solved:false, hint:null, msg:'', msgCls:'' };
    seconds=0;
    render();
  }
  function startTimer(){
    if(timerId) clearInterval(timerId);
    timerId=setInterval(function(){
      if(!el.isConnected){ clearInterval(timerId); return; }
      seconds++;
      var tm=el.querySelector('.gm-timer');
      if(tm) tm.textContent = '⏱ ' + seconds + ' 秒';
    },1000);
  }
  function exprHtml(){
    if(!st.tokens.length) return '<span style="color:var(--ink-faint)">点下面的牌和运算符，组一个算式…</span>';
    var h='';
    for(var i=0;i<st.tokens.length;i++){
      var tk=st.tokens[i];
      var txt='';
      if(tk.type==='num') txt=gmCardLabel(tk.val);
      else if(tk.type==='lp') txt='(';
      else if(tk.type==='rp') txt=')';
      else if(tk.val==='*') txt='×'; else if(tk.val==='/') txt='÷';
      else txt=tk.val;
      h+='<span class="gm-tok" data-i="'+i+'">'+txt+'</span>';
    }
    return h;
  }
  function render(){
    var cards='';
    for(var i=0;i<4;i++){
      var v=st.nums[i];
      cards+='<div class="gm-pcard'+(st.used[i]?' used':'')+'" data-card="'+i+'">'+gmCardLabel(v)+'<small>'+v+'</small></div>';
    }
    el.innerHTML =
      '<div class="gm-wrap">' +
        '<div class="gm-top">' +
          '<button class="gm-btn ghost" data-act="back">← 返回</button>' +
          '<strong>24点</strong>' +
          '<span class="gm-sp"></span>' +
          '<span class="gm-timer">⏱ 0 秒</span>' +
        '</div>' +
        '<p style="color:var(--ink-soft);text-align:center;margin:4px 0;">用上全部 4 张牌，加 + 减 − 乘 × 除 ÷，算出 24！</p>' +
        '<div class="gm-deck">'+cards+'</div>' +
        '<div class="gm-expr">'+exprHtml()+'</div>' +
        '<div class="gm-pad">' +
          '<button class="gm-btn gm-op" data-op="+">＋</button>' +
          '<button class="gm-btn gm-op" data-op="-">－</button>' +
          '<button class="gm-btn gm-op" data-op="*">×</button>' +
          '<button class="gm-btn gm-op" data-op="/">÷</button>' +
          '<button class="gm-btn gm-op" data-op="(">(</button>' +
          '<button class="gm-btn gm-op" data-op=")">)</button>' +
        '</div>' +
        '<div class="gm-pad">' +
          '<button class="gm-btn ghost" data-act="hint">💡 提示</button>' +
          '<button class="gm-btn ghost" data-act="clear">清空</button>' +
          '<button class="gm-btn warn" data-act="submit">提交</button>' +
          (st.solved?'<button class="gm-btn" data-act="again">再来一局</button>':'') +
        '</div>' +
        '<div class="gm-msg '+st.msgCls+'">'+st.msg+'</div>' +
      '</div>';
    bind();
  }
  function bind(){
    var i;
    el.querySelector('[data-act=back]').addEventListener('click', function(){ if(timerId) clearInterval(timerId); back(); });
    el.querySelector('[data-act=clear]').addEventListener('click', function(){
      if(st.solved) return;
      st.tokens=[]; st.used=[false,false,false,false]; st.msg=''; st.msgCls=''; render();
    });
    el.querySelector('[data-act=hint]').addEventListener('click', function(){
      if(st.solved) return;
      if(!st.hint){ st.hint=gmSolve24(st.nums.map(function(v){ return {v:v, s:String(v)}; })); }
      st.msg='💡 一个小提示：'+st.hint; st.msgCls='tip'; render();
    });
    el.querySelector('[data-act=submit]').addEventListener('click', function(){
      if(st.solved) return;
      if(st.tokens.length<3){ st.msg='算式还不完整哦～'; st.msgCls='bad'; render(); return; }
      var val=gmEvalTokens(st.tokens);
      gmAnswer();
      if(val===null){ st.msg='这个式子算不出来，再检查一下～'; st.msgCls='bad'; render(); return; }
      if(Math.abs(val-24)<1e-6){
        st.solved=true;
        st.msg='🎉 太棒了！'+tokensText(st.tokens)+' = 24，用时 '+seconds+' 秒！';
        st.msgCls='ok'; render();
      } else {
        st.msg='算出来是 '+Math.round(val*100)/100+'，还不是 24，再试试！';
        st.msgCls='bad'; render();
      }
    });
    var againBtn=el.querySelector('[data-act=again]');
    if(againBtn) againBtn.addEventListener('click', deal);
    var pcs=el.querySelectorAll('.gm-pcard');
    for(i=0;i<pcs.length;i++){
      (function(c){
        c.addEventListener('click', function(){
          if(st.solved) return;
          var idx=+c.getAttribute('data-card');
          if(st.used[idx]) return;
          st.tokens.push({type:'num', val:st.nums[idx], _ci:idx});
          st.used[idx]=true;
          render();
        });
      })(pcs[i]);
    }
    var ops=el.querySelectorAll('[data-op]');
    for(i=0;i<ops.length;i++){
      (function(o){
        o.addEventListener('click', function(){
          if(st.solved) return;
          var op=o.getAttribute('data-op');
          if(op==='(') st.tokens.push({type:'lp'});
          else if(op===')') st.tokens.push({type:'rp'});
          else st.tokens.push({type:'op', val:op});
          render();
        });
      })(ops[i]);
    }
    var toks=el.querySelectorAll('.gm-tok');
    for(i=0;i<toks.length;i++){
      (function(t){
        t.addEventListener('click', function(){
          if(st.solved) return;
          var idx=+t.getAttribute('data-i');
          var tk=st.tokens[idx];
          if(tk.type==='num') st.used[tk._ci]=false;
          st.tokens.splice(idx,1);
          render();
        });
      })(toks[i]);
    }
  }
  function tokensText(tokens){
    var h='';
    for(var i=0;i<tokens.length;i++){
      var tk=tokens[i];
      if(tk.type==='num') h+=gmCardLabel(tk.val);
      else if(tk.type==='lp') h+='(';
      else if(tk.type==='rp') h+=')';
      else if(tk.val==='*') h+='×'; else if(tk.val==='/') h+='÷';
      else h+=tk.val;
    }
    return h;
  }
  deal();
  startTimer();
}

/* ============================================================
 * 游戏二：数独（四宫 / 六宫 / 九宫）
 * ============================================================ */
function sdValid(g,n,br,bc,idx,d){
  var r=Math.floor(idx/n), c=idx%n;
  var i;
  for(i=0;i<n;i++){ if(g[r*n+i]===d) return false; if(g[i*n+c]===d) return false; }
  var br0=Math.floor(r/br)*br, bc0=Math.floor(c/bc)*bc;
  for(var a=0;a<br;a++) for(var b=0;b<bc;b++){ if(g[(br0+a)*n+(bc0+b)]===d) return false; }
  return true;
}
function sdSolve(g,n,br,bc,random){
  var idx=-1, i;
  for(i=0;i<n*n;i++) if(g[i]===0){ idx=i; break; }
  if(idx<0) return true;
  var ds=[]; for(var d=1;d<=n;d++) ds.push(d);
  if(random) gmShuffle(ds);
  for(var k=0;k<ds.length;k++){
    if(sdValid(g,n,br,bc,idx,ds[k])){
      g[idx]=ds[k];
      if(sdSolve(g,n,br,bc,random)) return true;
      g[idx]=0;
    }
  }
  return false;
}
function sdCount(g,n,br,bc,limit){
  var c=0;
  function bt(){
    if(c>=limit) return;
    var idx=-1;
    for(var i=0;i<n*n;i++) if(g[i]===0){ idx=i; break; }
    if(idx<0){ c++; return; }
    for(var d=1;d<=n;d++){
      if(sdValid(g,n,br,bc,idx,d)){
        g[idx]=d; bt(); g[idx]=0;
        if(c>=limit) return;
      }
    }
  }
  bt();
  return c;
}
function sdGen(n,holes){
  var cfg={4:[2,2],6:[2,3],9:[3,3]}[n];
  var sol=new Array(n*n).fill(0);
  sdSolve(sol,n,cfg[0],cfg[1],true);
  var puzzle=sol.slice();
  var order=[]; for(var i=0;i<n*n;i++) order.push(i);
  gmShuffle(order);
  var removed=0;
  for(var k=0;k<order.length && removed<holes;k++){
    var idx=order[k], old=puzzle[idx];
    puzzle[idx]=0;
    if(sdCount(puzzle.slice(),n,cfg[0],cfg[1],2)!==1) puzzle[idx]=old;
    else removed++;
  }
  return {puzzle:puzzle, sol:sol};
}
function Games_renderSudoku(el, back){
  Games_ensureCss();
  var DIF=[
    {n:4, label:'四宫·易', holes:6},
    {n:6, label:'六宫·中', holes:12},
    {n:9, label:'九宫·难', holes:42}
  ];
  var di=0, st=null;

  function newGame(){
    var d=DIF[di];
    var g=sdGen(d.n, d.holes);
    var cfg={4:[2,2],6:[2,3],9:[3,3]}[d.n];
    st={ n:d.n, br:cfg[0], bc:cfg[1], puzzle:g.puzzle, sol:g.sol,
         user:g.puzzle.slice(), given:g.puzzle.map(function(v){return v!==0;}),
         sel:-1, notesMode:false, notes:{}, checked:false, done:false, msg:'' };
    render();
  }
  function render(){
    var d=DIF[di], n=st.n;
    var gridStyle='grid-template-columns:repeat('+n+',1fr);';
    var cells='';
    for(var i=0;i<n*n;i++){
      var r=Math.floor(i/n), c=i%n;
      var cls='gm-cell';
      if(st.given[i]) cls+=' given';
      if(st.sel===i) cls+=' sel';
      if(st.checked && !st.given[i] && st.user[i]!==0){
        cls += (st.user[i]===st.sol[i]) ? ' good' : ' err';
      }
      /* 粗线分隔宫 */
      var brd='';
      var boxR=Math.floor(r/st.br), boxC=Math.floor(c/st.bc);
      brd += 'border-right:1px solid var(--line);';
      brd += 'border-bottom:1px solid var(--line);';
      if(boxC===Math.floor((n-1)/st.bc)) brd += 'border-right:none;';
      else if((c+1)%st.bc===0) brd+='border-right:2px solid var(--ink);';
      if(boxR===Math.floor((n-1)/st.br)) brd+='border-bottom:none;';
      else if((r+1)%st.br===0) brd+='border-bottom:2px solid var(--ink);';
      var v=st.user[i];
      var inner = v===0 ? '' : v;
      var note='';
      if(v===0 && st.notes[i]){
        note='<span class="note">'+Object.keys(st.notes[i]).sort().join(' ')+'</span>';
      }
      cells+='<div class="'+cls+'" data-cell="'+i+'" style="'+brd+'">'+inner+note+'</div>';
    }
    var pads='';
    for(var k=1;k<=n;k++) pads+='<button class="gm-btn" data-num="'+k+'">'+k+'</button>';
    var diffs='';
    for(var q=0;q<DIF.length;q++){
      diffs+='<button class="gm-btn ghost'+(q===di?'':'')+'" data-dif="'+q+'" style="'+(q===di?'background:var(--teal);color:#FCFDF9;':'')+'">'+DIF[q].label+'</button>';
    }
    el.innerHTML =
      '<div class="gm-wrap">' +
        '<div class="gm-top"><button class="gm-btn ghost" data-act="back">← 返回</button><strong>数独</strong><span class="gm-sp"></span></div>' +
        '<div class="gm-diff">'+diffs+'</div>' +
        '<div class="gm-grid" style="'+gridStyle+'">'+cells+'</div>' +
        '<div class="gm-numpad">'+pads+
          '<button class="gm-btn ghost" data-act="erase">擦除</button>' +
          '<button class="gm-btn ghost" data-act="note" style="'+(st.notesMode?'background:var(--amber);color:#FCFDF9;':'')+'">笔记</button>' +
          '<button class="gm-btn ghost" data-act="check">校验</button>' +
          '<button class="gm-btn warn" data-act="new">换一局</button>' +
        '</div>' +
        '<div class="gm-msg '+(st.done?'ok':'')+'">'+(st.msg||'')+'</div>' +
      '</div>';
    bind();
  }
  function afterFill(){
    st.checked=false;
    var full=true, ok=true;
    for(var i=0;i<st.n*st.n;i++){
      if(st.user[i]===0) full=false;
      else if(st.user[i]!==st.sol[i]) ok=false;
    }
    if(full && ok && !st.done){
      st.done=true;
      st.msg='🎉 全部填对啦！你真厉害！';
      gmAnswer();
    } else if(full && !ok){
      st.msg='已经填满了，但还有错哦，点"校验"看看。';
    }
  }
  function bind(){
    el.querySelector('[data-act=back]').addEventListener('click', back);
    el.querySelector('[data-act=new]').addEventListener('click', newGame);
    el.querySelector('[data-act=check]').addEventListener('click', function(){
      st.checked=true; gmAnswer();
      var bad=0;
      for(var i=0;i<st.n*st.n;i++){ if(!st.given[i] && st.user[i]!==0 && st.user[i]!==st.sol[i]) bad++; }
      if(bad===0){ st.msg='目前填的都对，继续加油！'; }
      else { st.msg='有 '+bad+' 格填错了，红颜色的改一改～'; }
      render();
    });
    el.querySelector('[data-act=note]').addEventListener('click', function(){ st.notesMode=!st.notesMode; render(); });
    el.querySelector('[data-act=erase]').addEventListener('click', function(){
      if(st.sel<0 || st.given[st.sel] || st.done) return;
      st.user[st.sel]=0; delete st.notes[st.sel];
      render();
    });
    var ds=el.querySelectorAll('[data-dif]');
    for(var i=0;i<ds.length;i++){
      (function(b){ b.addEventListener('click', function(){ di=+b.getAttribute('data-dif'); newGame(); }); })(ds[i]);
    }
    var ns=el.querySelectorAll('[data-num]');
    for(var j=0;j<ns.length;j++){
      (function(b){
        b.addEventListener('click', function(){
          if(st.sel<0 || st.given[st.sel] || st.done) return;
          var v=+b.getAttribute('data-num');
          if(st.notesMode){
            if(!st.notes[st.sel]) st.notes[st.sel]={};
            if(st.notes[st.sel][v]) delete st.notes[st.sel][v]; else st.notes[st.sel][v]=1;
            gmAnswer();
          } else {
            st.user[st.sel]=v; delete st.notes[st.sel];
            gmAnswer();
            afterFill();
          }
          render();
        });
      })(ns[j]);
    }
    var cs=el.querySelectorAll('[data-cell]');
    for(var k=0;k<cs.length;k++){
      (function(c){
        c.addEventListener('click', function(){ st.sel=+c.getAttribute('data-cell'); render(); });
      })(cs[k]);
    }
  }
  newGame();
}

/* ============================================================
 * 游戏三：火柴棒
 * ============================================================ */
var GM_SEG = {
  '0':'abcdef', '1':'bc', '2':'abged', '3':'abgcd', '4':'fgbc',
  '5':'afgcd', '6':'afgedc', '7':'abc', '8':'abcdefg', '9':'abcdfg'
};
function gmSvgLine(x1,y1,x2,y2,cls){
  return "<line x1='"+x1+"' y1='"+y1+"' x2='"+x2+"' y2='"+y2+"' class='"+(cls||'op')+"'/>";
}
/* 由两个算式字符串生成棋盘（数字段=可移动火柴，运算符为固定绘制） */
function gmBuildEqBoard(initStr, targetStr){
  var W=26, H=48, GAP=12, OPGAP=24, X0=20, Y0=20;
  var slots={}, initOcc=[], targOcc=[], extra='';
  var x=X0, dc=0;
  for(var i=0;i<initStr.length;i++){
    var ch=initStr[i];
    if(ch>='0'&&ch<='9'){
      var pos={
        a:[x,Y0,x+W,Y0], g:[x,Y0+H/2,x+W,Y0+H/2], d:[x,Y0+H,x+W,Y0+H],
        f:[x,Y0,x,Y0+H/2], b:[x+W,Y0,x+W,Y0+H/2],
        e:[x,Y0+H/2,x,Y0+H], c:[x+W,Y0+H/2,x+W,Y0+H]
      };
      var base='d'+dc;
      for(var s in pos){
        var p=pos[s];
        slots[base+'_'+s]={x1:p[0],y1:p[1],x2:p[2],y2:p[3]};
      }
      var sa=GM_SEG[ch].split(''), st=GM_SEG[targetStr[i]].split('');
      for(var m=0;m<sa.length;m++) initOcc.push(base+'_'+sa[m]);
      for(var m2=0;m2<st.length;m2++) targOcc.push(base+'_'+st[m2]);
      x+=W+GAP; dc++;
    } else {
      var cy=Y0+H/2, cx=x;
      if(ch==='+') extra+=gmSvgLine(cx,cy-9,cx,cy+9)+gmSvgLine(cx-9,cy,cx+9,cy);
      else if(ch==='-') extra+=gmSvgLine(cx-9,cy,cx+9,cy);
      else if(ch==='=') extra+=gmSvgLine(cx-9,cy-4,cx+9,cy-4)+gmSvgLine(cx-9,cy+4,cx+9,cy+4);
      else if(ch==='×') extra+=gmSvgLine(cx-8,cy-8,cx+8,cy+8)+gmSvgLine(cx-8,cy+8,cx+8,cy-8);
      x+=OPGAP;
    }
  }
  return {slots:slots, init:initOcc, target:targOcc, extra:extra, w:x+8, h:Y0+H+16};
}
/* 图形关卡：单位坐标线段列表 */
function gmSlotId(x1,y1,x2,y2){
  var a=x1+','+y1, b=x2+','+y2;
  return a<=b ? a+'-'+b : b+'-'+a;
}
function gmBuildShapeBoard(segs, S){
  S=S||36;
  var slots={};
  for(var i=0;i<segs.length;i++){
    var p=segs[i], id=gmSlotId(p[0],p[1],p[2],p[3]);
    slots[id]={x1:p[0]*S, y1:p[1]*S, x2:p[2]*S, y2:p[3]*S};
  }
  var xs=[], ys=[];
  for(var k in slots){ xs.push(slots[k].x1, slots[k].x2); ys.push(slots[k].y1, slots[k].y2); }
  var w=Math.max.apply(null,xs)+S, h=Math.max.apply(null,ys)+S;
  return {slots:slots, w:w, h:h};
}
/* 关卡表：两类各 8 关，由易到难 */
function gmMatchLevels(){
  /* —— 图形关卡数据（单位坐标）—— */
  var g2x2 = [[0,0,1,0],[1,0,2,0],[0,1,1,1],[1,1,2,1],[0,2,1,2],[1,2,2,2],
              [0,0,0,2],[1,0,1,1],[1,1,1,2],[2,0,2,2]];
  var g2x2_minus = gmSlotId(1,0,1,1)+'|'+gmSlotId(0,1,1,1);
  var sq = [[0,0,2,0],[2,0,2,2],[2,2,0,2],[0,2,0,0]];
  var sq_diag = sq.concat([[0,0,2,2],[0,2,2,0]]);
  var row3 = [[0,0,1,0],[1,0,2,0],[2,0,3,0],[0,1,1,1],[1,1,2,1],[2,1,3,1],
              [0,0,0,1],[1,0,1,1],[2,0,2,1],[3,0,3,1]];
  var L3 = [[0,0,1,0],[1,0,2,0],[0,1,1,1],[1,1,2,1],[1,2,2,2],
            [0,0,0,1],[0,1,0,2],[1,0,1,1],[1,1,1,2],[2,0,2,1]];
  var L3_full = L3.concat([[2,1,2,2],[1,2,2,2]]);
  var fishR = [[0,2,2,0],[0,2,2,4],[2,0,2,4],[0,2,-1,1],[0,2,-1,3],[-1,1,-1,3]];
  var fishL = [[4,2,2,0],[4,2,2,4],[2,0,2,4],[4,2,5,1],[4,2,5,3],[5,1,5,3]];

  return [
    /* ===== 算式类 8 关 ===== */
    {cat:'eq', t:'移除 1 根，使等式成立', init:'3+3=8', target:'3+3=6'},
    {cat:'eq', t:'添加 1 根，使等式成立', init:'4+4=9', target:'4+4=8'},
    {cat:'eq', t:'移动 1 根，使等式成立', init:'1+1=3', target:'1+1=2'},
    {cat:'eq', t:'移动 1 根，使等式成立', init:'9-6=2', target:'9-6=3'},
    {cat:'eq', t:'移除 1 根，使等式成立', init:'2+3=6', target:'2+3=5'},
    {cat:'eq', t:'变换火柴（移一根、补一根），使等式成立', init:'9-3=2', target:'9-3=6'},
    {cat:'eq', t:'移动 1 根，使两位数等式成立', init:'7+6=12', target:'7+6=13'},
    {cat:'eq', t:'移动 1 根，使两位数等式成立', init:'9+4=12', target:'9+4=13'},
    /* ===== 图形类 8 关 ===== */
    {cat:'shape', t:'移走 2 根火柴，让 4 个小正方形变成 2 个', segs:g2x2, init:g2x2, targetExclude:g2x2_minus},
    {cat:'shape', t:'添加 2 根火柴，在正方形里分出 4 个三角形', segs:sq, init:sq, target:sq_diag},
    {cat:'shape', t:'添加 2 根火柴，把"L"形 3 格变成 4 个小正方形', segs:L3, init:L3, target:L3_full},
    {cat:'shape', t:'移动火柴，把一排 3 个正方形摆成"L"形', segs:row3, init:row3, target:L3},
    {cat:'shape', t:'移动火柴，把四宫格摆成一排 3 个正方形', segs:g2x2, init:g2x2, target:row3},
    {cat:'shape', t:'移动 5 根火柴，让小鱼转身朝左边游', segs:fishR, init:fishR, target:fishL}
  ];
}
function Games_renderMatch(el, back){
  Games_ensureCss();
  var levels=gmMatchLevels();
  var cat='eq', li=0, st=null;

  function curLevels(){ return levels.filter(function(l){ return l.cat===cat; }); }

  function loadLevel(){
    var lv=curLevels()[li];
    var board;
    if(lv.cat==='eq'){
      board=gmBuildEqBoard(lv.init, lv.target);
      board.initSet=board.init.slice();
      board.targetSet=board.target.slice();
    } else {
      var S=36;
      var universe=(lv.segs||[]).concat(lv.init||[]).concat(lv.target||[]);
      board=gmBuildShapeBoard(universe, S);
      board.initSet=lv.init.map(function(p){ return gmSlotId(p[0],p[1],p[2],p[3]); });
      if(lv.target){
        board.targetSet=lv.target.map(function(p){ return gmSlotId(p[0],p[1],p[2],p[3]); });
      } else if(lv.targetExclude){
        var ex=lv.targetExclude.split('|');
        board.targetSet=board.initSet.filter(function(id){ return ex.indexOf(id)<0; });
      }
      board.extra='';
    }
    st={ lv:lv, board:board, occ:board.initSet.slice(), sel:null, mode:'move', hist:[], done:false, msg:'' };
    render();
  }
  function svgForBoard(){
    var b=st.board, parts=[], i;
    parts.push("<svg viewBox='-6 -6 "+(b.w+12)+" "+(b.h+12)+"' xmlns='http://www.w3.org/2000/svg'>");
    parts.push("<defs><style>opline{stroke:var(--ink);stroke-width:2;stroke-linecap:round;}slot{stroke:var(--line);stroke-width:2;stroke-dasharray:3 4;}stick{stroke:var(--amber);stroke-width:5;stroke-linecap:round;}head{fill:var(--red);}sel{stroke:var(--teal);stroke-width:8;stroke-linecap:round;opacity:.5;}</style></defs>");
    /* 空位（虚线提示） */
    for(var id in b.slots){
      if(st.occ.indexOf(id)<0){
        var p=b.slots[id];
        parts.push("<line class='slot' x1='"+p.x1+"' y1='"+p.y1+"' x2='"+p.x2+"' y2='"+p.y2+"' data-slot='"+id+"'/>");
      }
    }
    /* 固定运算符 */
    parts.push("<g stroke='var(--ink)' stroke-width='2' stroke-linecap='round'>"+b.extra+"</g>");
    /* 已放火柴 */
    for(i=0;i<st.occ.length;i++){
      var q=b.slots[st.occ[i]];
      if(!q) continue;
      if(st.sel===st.occ[i]) parts.push("<line class='sel' x1='"+q.x1+"' y1='"+q.y1+"' x2='"+q.x2+"' y2='"+q.y2+"'/>");
      parts.push("<line class='stick' x1='"+q.x1+"' y1='"+q.y1+"' x2='"+q.x2+"' y2='"+q.y2+"' data-slot='"+st.occ[i]+"'/>");
      parts.push("<circle class='head' cx='"+q.x1+"' cy='"+q.y1+"' r='4.5' data-slot='"+st.occ[i]+"'/>");
    }
    parts.push("</svg>");
    return parts.join('');
  }
  function render(){
    var lv=curLevels()[li];
    var lvbtns='';
    var list=curLevels();
    for(var i=0;i<list.length;i++){
      var cls='gm-lv';
      if(i===li) cls+=' on';
      lvbtns+='<button class="'+cls+'" data-lv="'+i+'">'+(i+1)+'</button>';
    }
    el.innerHTML =
      '<div class="gm-wrap">' +
        '<div class="gm-top"><button class="gm-btn ghost" data-act="back">← 返回</button><strong>火柴棒</strong><span class="gm-sp"></span></div>' +
        '<div class="gm-row" style="margin-bottom:6px;">' +
          '<button class="gm-btn ghost" data-cat="eq" style="'+(cat==='eq'?'background:var(--teal);color:#FCFDF9;':'')+'">算式变换</button>' +
          '<button class="gm-btn ghost" data-cat="shape" style="'+(cat==='shape'?'background:var(--teal);color:#FCFDF9;':'')+'">图形变换</button>' +
        '</div>' +
        '<div class="gm-lvbar">'+lvbtns+'</div>' +
        '<p style="margin:6px 0;color:var(--ink-soft);">第 '+(li+1)+' 关：'+lv.t+'</p>' +
        '<div class="gm-board">'+svgForBoard()+'</div>' +
        '<div class="gm-mod">' +
          '<button class="gm-btn ghost'+(st.mode==='move'?' on':'')+'" data-mode="move">✋ 移动</button>' +
          '<button class="gm-btn ghost'+(st.mode==='add'?' on':'')+'" data-mode="add">➕ 添加</button>' +
          '<button class="gm-btn ghost'+(st.mode==='remove'?' on':'')+'" data-mode="remove">🗑 移除</button>' +
          '<span class="gm-sp"></span>' +
          '<button class="gm-btn ghost" data-act="undo">↩ 撤销</button>' +
          '<button class="gm-btn ghost" data-act="reset">重置</button>' +
          '<button class="gm-btn warn" data-act="check">✓ 校验</button>' +
        '</div>' +
        (st.done?'<div class="gm-center" style="margin-top:8px;"><button class="gm-btn" data-act="next">下一关 →</button></div>':'') +
        '<div class="gm-msg '+(st.done?'ok':'')+'">'+(st.msg||'')+'</div>' +
      '</div>';
    bind();
  }
  function pushHist(h){ st.hist.push(h); }
  function applyCheck(){
    var a=st.occ.slice().sort().join('|'), b=st.board.targetSet.slice().sort().join('|');
    if(a===b){
      st.done=true;
      st.msg='🎉 过关啦！火柴摆得完全正确！';
      gmAnswer();
      render();
      return true;
    }
    return false;
  }
  function bind(){
    el.querySelector('[data-act=back]').addEventListener('click', back);
    var cats=el.querySelectorAll('[data-cat]');
    for(var i=0;i<cats.length;i++){
      (function(c){ c.addEventListener('click', function(){ cat=c.getAttribute('data-cat'); li=0; loadLevel(); }); })(cats[i]);
    }
    var lbs=el.querySelectorAll('[data-lv]');
    for(var j=0;j<lbs.length;j++){
      (function(b){ b.addEventListener('click', function(){ li=+b.getAttribute('data-lv'); loadLevel(); }); })(lbs[j]);
    }
    var ms=el.querySelectorAll('[data-mode]');
    for(var k=0;k<ms.length;k++){
      (function(b){ b.addEventListener('click', function(){ st.mode=b.getAttribute('data-mode'); st.sel=null; render(); }); })(ms[k]);
    }
    el.querySelector('[data-act=undo]').addEventListener('click', function(){
      if(!st.hist.length){ return; }
      var h=st.hist.pop();
      if(h.op==='move'){ st.occ.splice(st.occ.indexOf(h.to),1); st.occ.push(h.from); }
      else if(h.op==='add'){ st.occ.splice(st.occ.indexOf(h.slot),1); }
      else if(h.op==='remove'){ st.occ.push(h.slot); }
      st.done=false; st.msg=''; render();
    });
    el.querySelector('[data-act=reset]').addEventListener('click', function(){
      st.occ=st.board.initSet.slice(); st.sel=null; st.hist=[]; st.done=false; st.msg=''; render();
    });
    el.querySelector('[data-act=check]').addEventListener('click', function(){
      gmAnswer();
      if(!applyCheck()){ st.msg='还不对哦，再调整一下～（虚线处是可以放火柴的位置）'; render(); }
    });
    var nb=el.querySelector('[data-act=next]');
    if(nb) nb.addEventListener('click', function(){
      var list=curLevels();
      if(li<list.length-1) li++; else { cat=(cat==='eq'?'shape':'eq'); li=0; }
      loadLevel();
    });
    /* 点 SVG 里的火柴/空位 */
    var hits=el.querySelectorAll('[data-slot]');
    for(var m=0;m<hits.length;m++){
      (function(node){
        node.addEventListener('click', function(){
          if(st.done) return;
          var id=node.getAttribute('data-slot');
          var has=st.occ.indexOf(id)>=0;
          if(st.mode==='move'){
            if(has){
              if(st.sel===id){ st.sel=null; } else { st.sel=id; }
            } else {
              if(st.sel){
                pushHist({op:'move', from:st.sel, to:id});
                st.occ.splice(st.occ.indexOf(st.sel),1);
                st.occ.push(id);
                st.sel=null;
              }
            }
          } else if(st.mode==='add'){
            if(!has){ pushHist({op:'add', slot:id}); st.occ.push(id); }
          } else if(st.mode==='remove'){
            if(has){ pushHist({op:'remove', slot:id}); st.occ.splice(st.occ.indexOf(id),1); }
          }
          st.msg='';
          render();
        });
      })(hits[m]);
    }
  }
  loadLevel();
}

/* ============================================================
 * 导出
 * ============================================================ */
var Games = {
  ensureCss: Games_ensureCss,
  renderCenter: Games_renderCenter,
  render24: Games_render24,
  renderSudoku: Games_renderSudoku,
  renderMatch: Games_renderMatch
};
