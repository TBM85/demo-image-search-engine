(this["webpackJsonpdemo-image-search-engine"]=this["webpackJsonpdemo-image-search-engine"]||[]).push([[4],{156:function(e,a,t){e.exports={ImageListItem:"ImageOutput_ImageListItem__3NikR",NoImages:"ImageOutput_NoImages__3YB8k",TotalImages:"ImageOutput_TotalImages___Y2FB"}},157:function(e,a,t){e.exports={CloseIcon:"ImgDialog_CloseIcon__2K08m",InfoIcon:"ImgDialog_InfoIcon__16EnI",InfoContainer:"ImgDialog_InfoContainer__u2faH",OpenInNewIcon:"ImgDialog_OpenInNewIcon__FXfVj"}},166:function(e,a,t){"use strict";t.r(a);var n=t(24),s=t(0),c=t(150),o=t(162),l=t(163),i=t(156),m=t.n(i),g=t(165),r=t(158),I=t.n(r),j=t(159),u=t.n(j),O=t(160),b=t.n(O),d=t(157),h=t.n(d),f=t(6),p=function(e){var a=e.isOpen,t=e.handleClose,n=e.handleInfo,s=e.showInfo,c=e.selectedImg,o=e.selectedAlt,l=e.selectedUser,i=e.selectedPageUrl;return Object(f.jsxs)(g.a,{className:h.a.Dialog,modal:"true",open:a,onClose:t,maxWidth:"md",children:[Object(f.jsx)(I.a,{onClick:t,className:h.a.CloseIcon}),Object(f.jsx)("img",{src:c,alt:o}),Object(f.jsx)(u.a,{onClick:n,className:h.a.InfoIcon}),s&&Object(f.jsxs)("div",{className:h.a.InfoContainer,children:[Object(f.jsxs)("p",{children:["Author: ",l]}),Object(f.jsx)(b.a,{className:h.a.OpenInNewIcon,onClick:function(){window.open(i)}})]})]})};a.default=function(e){var a=e.searchText,t=e.images,i=e.totalImages,g=Object(s.useState)(""),r=Object(n.a)(g,2),I=r[0],j=r[1],u=Object(s.useState)(""),O=Object(n.a)(u,2),b=O[0],d=O[1],h=Object(s.useState)(""),_=Object(n.a)(h,2),x=_[0],N=_[1],C=Object(s.useState)(""),w=Object(n.a)(C,2),k=w[0],L=w[1],U=Object(s.useState)(!1),v=Object(n.a)(U,2),S=v[0],D=v[1],R=Object(s.useState)(!1),T=Object(n.a)(R,2),A=T[0],B=T[1],F=function(e,a){return e.substring(0,e.length-7)+a+e.substring(e.length-4,e.length)};return Object(f.jsxs)(c.a,{className:m.a.ImageContainer,children:[a.length>0&&0===t.length?Object(f.jsx)("p",{className:m.a.NoImages,children:"No image matches your search"}):Object(f.jsxs)("p",{className:m.a.TotalImages,children:[i," images"]}),t.length>0&&Object(f.jsx)(o.a,{cols:4,className:m.a.ImageList,children:t.map((function(e){return Object(f.jsx)(l.a,{className:m.a.ImageListItem,children:Object(f.jsx)("img",{src:F(e.webformatURL,"340"),alt:e.tags,onClick:function(){return a=e.largeImageURL,t=e.tags,n=e.user,s=e.pageURL,D(!0),j(a),d(t),N(n),void L(s);var a,t,n,s}})},e.id)}))}),Object(f.jsx)(p,{isOpen:S,handleClose:function(){D(!1),B(!1)},handleInfo:function(){B(!A)},showInfo:A,selectedImg:I,selectedAlt:b,selectedUser:x,selectedPageUrl:k})]})}}}]);
//# sourceMappingURL=4.feb77ff2.chunk.js.map