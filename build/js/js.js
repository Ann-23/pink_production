var pageHeader=document.querySelector(".page-header"),navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");pageHeader.classList.remove("page-header--nojs"),navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")&pageHeader.classList.contains("page-header--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened"),pageHeader.classList.remove("page-header--closed"),pageHeader.classList.add("page-header--opened")):(navMain.classList.remove("main-nav--opened"),navMain.classList.add("main-nav--closed"),pageHeader.classList.remove("page-header--opened"),pageHeader.classList.add("page-header--closed"))});var popupNotDone=document.querySelector(".pop-up--not-done"),popupDone=document.querySelector(".pop-up--done"),linkOk=document.querySelector(".button--ok"),link=document.querySelector(".button--close"),form=document.querySelector("form"),surname=document.querySelector("[name=surname]"),firstname=document.querySelector("[name=firstname]"),email=document.querySelector("[name=email]");form.addEventListener("submit",function(e){surname.value&&firstname.value&&email.value?(e.preventDefault(),popupDone.classList.add("pop-up--show"),link.addEventListener("click",function(e){e.preventDefault(),popupDone.remove("pop-up--show")})):(e.preventDefault(),popupNotDone.classList.add("pop-up--show"),surname.classList.add("input__control--red"),firstname.classList.add("input__control--red"),email.classList.add("input__control--red"),linkOk.addEventListener("click",function(e){e.preventDefault(),popupNotDone.remove("pop-up--show")}))});