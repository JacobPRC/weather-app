(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),i=(a(27),a(9)),l=a(10),m=a(11),o=a(12),d=(a(28),a(29),r.a.Component,a(6)),h=function(e){},u=(a(35),a(36),a(41)),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).myElement=null,n.myTween=null,n.state={data:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.city,a=new u.b({repeat:-1});this.myTween=a.to(this.myElement,30,{backgroundPosition:"-2247px 0px",ease:u.a.easeNone}),fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=ba9d5371a355cdeb9f7c396fe6d5a83d&units=metric").then((function(e){return e.json()})).then((function(t){return e.setState({data:t},(function(){return console.log(t)}))})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.city;t.data===this.state.data&&(console.log("updated"),fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&appid=ba9d5371a355cdeb9f7c396fe6d5a83d&units=metric").then((function(e){return e.json()})).then((function(e){return a.setState({data:e},(function(){return console.log(e)}))})).catch((function(e){return console.log(e)})))}},{key:"render",value:function(){var e=this,t=this.state.data?this.state.data.weather[0].icon:"",a=this.state.data?this.state.data.name:"",n=this.state.data?this.state.data.sys.country:"",c=this.state.data?this.state.data.weather[0].description:"";return r.a.createElement("body",null,r.a.createElement("div",{ref:function(t){return e.myElement=t},className:"current-weather"},r.a.createElement("content",null,r.a.createElement("div",{className:"row m-6"},r.a.createElement("div",{id:"weather-box",className:"col-sm-7"},r.a.createElement("div",{className:"card-curr"},r.a.createElement("div",{className:"card-body-curr"},r.a.createElement("div",{className:"one"},r.a.createElement("h5",{className:"card-title"},"Weather in ",a,", ",n)),r.a.createElement("div",{className:"two"},r.a.createElement("div",{className:"temp"},r.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(t,".png")}),r.a.createElement("p",{className:"card-text-temp"},this.state.data?Math.round(this.state.data.main.temp):"","\xb0C")),r.a.createElement("div",{className:"desc"},r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Feels like:")," ",this.state.data?Math.round(this.state.data.main.feels_like):"","\xb0C"),r.a.createElement("p",{className:"card-text-desc"},r.a.createElement("i",null,c.charAt(0).toUpperCase()+c.slice(1))," "))),r.a.createElement("div",{className:"max-min"},r.a.createElement("div",{className:"max"},r.a.createElement("p",{className:"card-text"},"Max Temp:"," ",this.state.data?Math.round(this.state.data.main.temp_max):"","\xb0C")),r.a.createElement("div",{className:"min"},r.a.createElement("p",{className:"card-text"},"Min Temp:"," ",this.state.data?this.state.data.main.temp_min:"","\xb0C"))),r.a.createElement("div",{className:"extras"},r.a.createElement("p",{className:"card-text"},"Pressure:"," ",this.state.data?Math.round(this.state.data.main.pressure):""," ","mmHg"),r.a.createElement("p",{className:"card-text"},"Humidity:"," ",this.state.data?this.state.data.main.humidity:"","%"),r.a.createElement("p",{className:"card-text"},"Wind speed:"," ",this.state.data?this.state.data.wind.speed:""," m/s")))))))))}}]),a}(r.a.Component),E=function(){return r.a.createElement("div",{className:"home-design"},r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"The Weather App"),r.a.createElement(d.b,{to:"/current-weather",className:"nav-link"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg"},"Check the current weather"))))},f=a(5),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).searchHandler=function(e){n.setState({city:e})},n.state={currentWeatherType:"Current Weather",city:"Perth"},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(h,{searchHandler:this.searchHandler}),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/current-weather"},r.a.createElement(p,{city:this.state.city})),r.a.createElement(f.a,{path:"/"},r.a.createElement(E,null)))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c11be689.chunk.js.map