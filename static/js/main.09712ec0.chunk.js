(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2rmkv",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1SVy9"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2a5Hl"}},12:function(e,t,a){e.exports={Button:"Button_Button__2lOt-",container:"Button_container__3nC8v"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__30MHX"}},16:function(e,t,a){e.exports={loader:"Loader_loader__2ILdp"}},21:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),c=a.n(r),i=(a(21),a(13)),l=a(3),s=a(4),u=a(6),h=a(5),m=a(7),d=a.n(m),p=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleChange=function(t){e.setState({value:t.currentTarget.value})},e.handleSumbit=function(t){t.preventDefault(),""!==e.state.value.trim()&&e.props.onSubmit(e.state.value)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:d.a.Searchbar,children:Object(p.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSumbit,children:[Object(p.jsx)("button",{type:" submit ",className:d.a.SearchForm_button,children:Object(p.jsx)("span",{className:d.a.SearchForm_button_label,children:" Search "})}),Object(p.jsx)("input",{className:d.a.SearchForm_input,type:"text",placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.value})]})})}}]),a}(n.Component),g=a(10),j=a.n(g);var f=function(e){var t=e.id,a=e.tags,n=e.webformatURL,o=e.onClick;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("li",{className:j.a.ImageGalleryItem,onClick:o,"data-id":t,children:Object(p.jsx)("img",{src:n,alt:a,className:j.a.ImageGalleryItem_image})})})},v=a(2),_=a.n(v),y=a(14),O=a.n(y);f.propTypes={photos:_.a.arrayOf(v.object),onSelected:_.a.func};var S=function(e){var t=e.photos,a=e.onSelected;return Object(p.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(p.jsx)(f,{id:e.id,tags:e.tags,webformatURL:e.webformatURL,onClick:function(){return a(e)}},e.id)}))})},x=a(15),I=a.n(x),k=(a(43),a(16)),w=a.n(k),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:w.a.loader,children:Object(p.jsx)(I.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}}]),a}(n.Component),F=a(11),L=a.n(F),N=document.querySelector("#modal-root"),T=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleClickOnBackdrop=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.largeImg,a=e.alt;return Object(r.createPortal)(Object(p.jsx)("div",{className:L.a.Overlay,onClick:this.handleClickOnBackdrop,children:Object(p.jsx)("div",{className:L.a.Modal,children:Object(p.jsx)("img",{src:t,alt:a})})}),N)}}]),a}(n.Component),B=a(12),G=a.n(B);var M=function(e){var t=e.onClick;return Object(p.jsx)("div",{className:G.a.container,children:Object(p.jsx)("button",{type:"button",onClick:t,className:G.a.Button,children:"Load More"})})},D="22869531-b15f4153a2c6549b5b245",E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:"",page:1,photos:[],isLoading:!1,selectedImage:null},e.onSubmit=function(t){e.setState({value:t})},e.onClickButton=function(){e.setState((function(e){return{page:e.page+1,isLoading:!0}})),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(e.state.value,"&page=").concat(e.state.page,"&key=").concat(D,"db08&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{photos:[].concat(Object(i.a)(e.photos),Object(i.a)(t.hits)),isLoading:!1}}))})).finally(e.scrollToTop)}),1e3)},e.scrollToTop=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleSelectImage=function(t){e.setState({selectedImage:t})},e.closeModal=function(){e.setState({selectedImage:null})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(t.value!==this.state.value&&(this.setState({isLoading:!0,page:1}),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(a.state.value,"&page=").concat(a.state.page,"&key=").concat(D,"db08&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return a.setState({photos:e.hits})})).finally(a.setState({isLoading:!1}))}),1e3)),0===this.state.photos.length)return new Error("\u041f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 ".concat(this.state.value," \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}},{key:"render",value:function(){var e=this.state,t=e.photos,a=e.selectedImage,n=e.isLoading;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{onSubmit:this.onSubmit}),Object(p.jsx)(S,{photos:t,onSelected:this.handleSelectImage}),t.length>0&&!n&&Object(p.jsx)(M,{onClick:this.onClickButton}),a&&Object(p.jsx)(T,{largeImg:a.largeImageURL,alt:a.tags,closeModal:this.closeModal}),this.state.isLoading&&Object(p.jsx)(C,{})]})}}]),a}(n.Component),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),U()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1LYul",SearchForm:"Searchbar_SearchForm__3WNgg",SearchForm_button:"Searchbar_SearchForm_button__1Ymgj",SearchForm_button_label:"Searchbar_SearchForm_button_label__3lJyA",SearchForm_input:"Searchbar_SearchForm_input__36c5y"}}},[[44,1,2]]]);
//# sourceMappingURL=main.09712ec0.chunk.js.map