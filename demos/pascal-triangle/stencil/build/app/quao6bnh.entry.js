const t=window.App.h;let e=100;function a(t){const e=t,a=[];a[0]=[1],a[1]=[1,1];for(let t=2;t<e;t++){a[t]=[1];for(let e=1;e<=t-1;e++){const n=a[t-1];a[t][e]=n[e]+n[e-1],a[t].push(1)}}return a}class n{constructor(){this._length=e,this._list=a(e)}_handleLoad(t){this._length=parseInt(t.target.getAttribute("data-value")),this._list=[...a(this._length)]}render(){return t("div",null,t("div",null,t("button",{"data-value":"10",onClick:t=>this._handleLoad(t)},"Load 10"),t("button",{"data-value":"100",onClick:t=>this._handleLoad(t)},"Load 100"),t("button",{"data-value":"500",onClick:t=>this._handleLoad(t)},"Load 500")),t("div",null,this._list.map(e=>t("div",null,e.map(e=>t("triangle-item",{text:e}))))))}static get is(){return"pascal-triangle"}static get encapsulation(){return"shadow"}static get properties(){return{_list:{type:"Any",attr:"_list",mutable:!0}}}}class i{render(){return t("span",null,this.text)}static get is(){return"triangle-item"}static get properties(){return{text:{type:String,attr:"text"}}}}export{n as PascalTriangle,i as TriangleItem};