
$('.bet-arrow').click(function () {
	$(this).find('i').toggleClass('fa-plus fa-minus');
});


$(document).on("keyup", ".decimalPt12", function (evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode == 8 || charCode == 37) {
		return true;
	} else if (charCode == 46 && $(this).val().indexOf('.') != -1) {
		return false;
	} else if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
});
$(document).on("keyup", ".decimalPt", function (evt) {

	var val = $(this).val();
	if (isNaN(val)) {
		val = val.replace(/[^0-9\.]/g, '');
		if (val.split('.').length > 2)
			val = val.replace(/\.+$/, "");
	}
	$(this).val(val);
});
$(document).on("keypress keyup blur", ".allownumericwithdecimal", function (event) {
	//this.value = this.value.replace(/[^0-9\.]/g,'');
	$(this).val($(this).val().replace(/[^0-9\.]/g, ''));
	if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
});

$(document).on("keypress keyup blur", ".allownumericwithoutdecimal", function (event) {
	$(this).val($(this).val().replace(/[^\d].+/, ""));
	if ((event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
});

/* Edit Stake  */
$('.Show').click(function () {
	$('#target').show(500);
	$('.Show').hide(0);
	$('.Hide').show(0);
});
$('.Hide').click(function () {
	$('#target').hide(500);
	$('.Show').show(0);
	$('.Hide').hide(0);
});
$('.toggle').click(function () {
	$('#target').toggle('slow');
});

//Detail page close 
$(document).ready(function () {
	$(".close-btn").click(function () {
		$(".blue-bx").hide();
	});
	$(".bg-red").click(function () {
		$(".blue-bx").hide();
	});
	$(".blue-box").click(function () {
		$(".blue-bx").show();
	});

	$(".close-btn").click(function () {
		$(".blue-bx1").hide();
	});
	$(".bg-red").click(function () {
		$(".blue-bx1").hide();
	});
	$(".blue-box").click(function () {
		$(".blue-bx1").show();
	});
});

$(".close-btn").click(function () {
	$(".bg-red-box").hide();
});
$(".bg-red").click(function () {
	$(".bg-red-box").hide();
});

$(".bg-red").click(function () {
	$(".bg-red-box").show();
});



$(document).on("click", ".faq-links", function () {
	$(this).find('i').toggleClass('fa-2x fa-caret-up fa-2x fa-caret-down');
});


$(document).ready(function () {

	$(document).on("click", "#my-tree li a", function () {

		$(".sports-drop-bx").addClass('active');
		$(".sidenav2").addClass('active');

	});
	$(document).on("click", "#backBtn", function () {

		$(".sidenav2").removeClass('active');
		$(".sports-drop-bx").removeClass('active');

	});

});



$(document).on("click", "#profile", function (e) {
	$("#profilinfo").fadeToggle();
	e.stopPropagation();
});

$("#profilinfo").click(function (e) {
	e.stopPropagation();
});

$(document).click(function () {
	$("#profilinfo").hide();
});

function openNav() {
	document.getElementById("mySidenav2").style.width = "100%";
	document.getElementById("mySidenav2").style.display = "block";
	$("#profilinfo").fadeToggle();
	$(".patti-baner-img").hide();
}

function closeNav() {
	document.getElementById("mySidenav2").style.width = "0";
	document.getElementById("mySidenav2").style.display = "none";
	$(".patti-baner-img").show();
}







$(document).ready(function () {

	$(".close-btn").click(function () {

		$(".blue-bx").hide();

	});

	$(".blue-box").click(function () {

		$(".blue-bx").show();

	});

});




$(document).ready(function () {



	$(".bg-light-blue").click(function () {

		$(".light-blue-box").show();

	});
	$(".close-btn").click(function (e) {

		$(".light-blue-box").hide();
		e.stopPropagation();
		//alert();

	});

});




$(document).ready(function () {
	$(".red-box").click(function () {

		$(".bg-red-box").show();

	});
	$(".close-btn").click(function (e) {

		$(".bg-red-box").hide();
		e.stopPropagation();
		//alert();

	});

});




(function () {

	window.inputNumber = function (el) {

		var min = el.attr('min') || false;
		var max = el.attr('max') || false;

		var els = {};

		els.dec = el.prev();
		els.inc = el.next();

		el.each(function () {
			init($(this));
		});

		function init(el) {

			els.dec.on('click', decrement);
			els.inc.on('click', increment);

			function decrement() {
				var value = el[0].value;
				value--;
				if (!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				var value = el[0].value;
				value++;
				if (!max || value <= max) {
					el[0].value = value++;
				}
			}
		}
	};
})();

inputNumber($('.input-number'));


/*$.extend($.expr[":"], {
	"containsIN" : function(elem, i, match, array) {
		return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});

var treefilter = function(el, options) {

	var defaults = {
		offsetLeft : 10, // left offset for each level
		searcher : null, // search input field
		expanded : false, // if true, your list will be show with expanded.
		multiselect : false // multiselect.
	};

	// Public Variables
	var plugin = this;
	var status = []; // save folder status for "var memory"

	plugin.settings = {};

	// Main Function
	var init = function() {
		plugin.settings = $.extend({}, defaults, options);
		plugin.el = el;

		// set class names to tags
		el.addClass("tf-tree");
		el.find("li").addClass("tf-child-true");
		el.find("li").css("padding-left", plugin.settings.offsetLeft);
		el.find("li a:only-child").parent().removeClass("tf-child-true");
		el.find("li a:only-child").parent().addClass("tf-child-false");

		// if the list has a checkbox, block event bubbling.
		el.find("input[type=checkbox]").click(function(e) {
			e.stopPropagation();
		});

		// set click event.
		el.find("li.tf-child-true").children("a").click(function(e) {
			if (e.metaKey || e.ctrlKey) {
				if ($(this).parent().hasClass("tf-open")) {
					$(this).parent().find("li.tf-child-true").removeClass("tf-open");
				} else {
					$(this).parent().find("li.tf-child-true").addClass("tf-open");
				}
			}
			$(this).parent().toggleClass("tf-open");
		});

		// toggle effect when multiselect enabled.
		el.find("li.tf-child-false").click(function() {
			if (plugin.settings.multiSelect != true) {
				el.find("li.tf-selected").removeClass("tf-selected");
			}
			$(this).toggleClass("tf-selected");
		});

		if (plugin.settings.searcher) {
			searcher();
		}
	};

	// PUBLIC METHOD
	plugin.openAll = function() {
		plugin.el.find("li.tf-child-true").parent().addClass("tf-open");
	};
	plugin.closeAll = function() {
		plugin.el.find("li.tf-child-true").parent().removeClass("tf-open");
	};

	// PRIVATE FUNCTION
	// fired when type on search input field.
	var searcher = function() {
		$(plugin.settings.searcher).keyup(function() {
			if ($(this).val().length == 0) {
				plugin.el.find(".tf-search-result").removeClass("tf-search-result");
				memory("out", status);
			} else {
				plugin.closeAll();
				plugin.el.find("li.tf-open").removeClass("tf-open");
				plugin.el.find("li.tf-search-result").removeClass("tf-search-result");
				plugin.el.find("li:containsIN('" + $(this).val() + "')").addClass("tf-search-result");
				plugin.el.find("li.tf-search-result").parent().addClass("tf-search-result");
			}
		});
		$(plugin.settings.searcher).keydown(function() {
			if ($(this).val().length == 0) {
				memory("in", status);
			}
		});
	};
	
	// save current status of folder 
	// action : string "in" / "out"
	// array : array that saves current status
	// list : el
	var memory = function(action) {
		if (action == "in") {
			status = [];
			plugin.el.find("li").each(function() {
				status.push($(this).hasClass("tf-open"));
			});
		} else if (action == "out") {
			plugin.el.find("li").each(function(i) {
				if (status[i]) { 
					$(this).addClass("tf-open");
				} else {
					$(this).removeClass("tf-open");
				}
			});
		}
	}

	init();
};*/

// Endless tree structured UL > LI > UL 

$.extend($.expr[":"], {
	"containsIN": function (elem, i, match, array) {
		return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});

var treefilter = function (el, options) {

	var defaults = {
		offsetLeft: 20, // left offset for each level
		searcher: null, // search input field
		expanded: false, // if true, your list will be show with expanded.
		expanded: false, // if true, your list will be show with expanded.
		multiselect: false // multiselect.
	};

	// Public Variables
	var plugin = this;
	var status = []; // save folder status for "var memory"

	plugin.settings = {};

	// Main Function
	var init = function () {
		plugin.settings = $.extend({}, defaults, options);
		plugin.el = el;

		// set class names to tags
		el.addClass("tf-tree");
		el.find("li").addClass("tf-child-true");
		//el.find("li").css("padding-left", plugin.settings.offsetLeft);
		el.find("li div:only-child").parent().removeClass("tf-child-true");
		el.find("li div:only-child").parent().addClass("tf-child-false");

		// if the list has a checkbox, block event bubbling.
		el.find("input[type=checkbox]").click(function (e) {
			e.stopPropagation();
		});

		// set click event.
		el.find("li.tf-child-true").children("div").click(function (e) {
			if (e.metaKey || e.ctrlKey) {
				if ($(this).parent().hasClass("tf-open")) {
					$(this).parent().find("li.tf-child-true").removeClass("tf-open");
				} else {
					$(this).parent().find("li.tf-child-true").addClass("tf-open");
				}
			}
			$(this).parent().toggleClass("tf-open");
		});

		// toggle effect when multiselect enabled.
		el.find("li.tf-child-false").click(function () {
			if (plugin.settings.multiSelect != true) {
				el.find("li.tf-selected").removeClass("tf-selected");
			}
			$(this).toggleClass("tf-selected");
		});

		if (plugin.settings.searcher) {
			searcher();
		}
	};

	// PUBLIC METHOD
	plugin.openAll = function () {
		plugin.el.find("li.tf-child-true").parent().addClass("tf-open");
	};
	plugin.closeAll = function () {
		plugin.el.find("li.tf-child-true").parent().removeClass("tf-open");
	};

	// PRIVATE FUNCTION
	// fired when type on search input field.
	var searcher = function () {
		$(plugin.settings.searcher).keyup(function () {
			if ($(this).val().length == 0) {
				plugin.el.find(".tf-search-result").removeClass("tf-search-result");
				memory("out", status);
			} else {
				plugin.closeAll();
				plugin.el.find("li.tf-open").removeClass("tf-open");
				plugin.el.find("li.tf-search-result").removeClass("tf-search-result");
				plugin.el.find("li:containsIN('" + $(this).val() + "')").addClass("tf-search-result");
				plugin.el.find("li.tf-search-result").parent().addClass("tf-search-result");
			}
		});
		$(plugin.settings.searcher).keydown(function () {
			if ($(this).val().length == 0) {
				memory("in", status);
			}
		});
	};

	// save current status of folder 
	// action : string "in" / "out"
	// array : array that saves current status
	// list : el
	var memory = function (action) {
		if (action == "in") {
			status = [];
			plugin.el.find("li").each(function () {
				status.push($(this).hasClass("tf-open"));
			});
		} else if (action == "out") {
			plugin.el.find("li").each(function (i) {
				if (status[i]) {
					$(this).addClass("tf-open");
				} else {
					$(this).removeClass("tf-open");
				}
			});
		}
	};

	init();
};

$(function () {
	var tree = new treefilter($("#my-tree"), {
		searcher: $("input#my-search"),
		multiselect: false
	});
});

$('.faq-links').click(function () {
	$(this).find('i').toggleClass('fa-plus-square-o fa-2x fa-minus-square-o fa-2x');
});




$(function () {
	$("#html").click(function () {
		if ($(this).is(":checked")) {
			$("#dvPassport").show();
			$("#AddPassport").hide();
		} else {
			$("#dvPassport").hide();
			$("#AddPassport").show();
		}
	});
});


function switchVisible() {
	if (document.getElementById('Div1')) {

		if (document.getElementById('Div1').style.display == 'none') {
			document.getElementById('Div1').style.display = 'block';
			document.getElementById('Div2').style.display = 'none';
		}
		else {
			document.getElementById('Div1').style.display = 'none';
			document.getElementById('Div2').style.display = 'block';
		}
	}
}

//jQuery(function ($) {
//	 
//var x, i, j, selElmnt, a, b, c;
///*look for any elements with the class "custom-select":*/
//x = document.getElementsByClassName("custom-select");
//	  
//for (i = 0; i < x.length; i++) {
//  selElmnt = x[i].getElementsByTagName("select")[0];
//  /*for each element, create a new DIV that will act as the selected item:*/
//  a = document.createElement("DIV");
//  a.setAttribute("class", "select-selected");
//  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//  x[i].appendChild(a);
//  /*for each element, create a new DIV that will contain the option list:*/
//  b = document.createElement("DIV");
//  b.setAttribute("class", "select-items select-hide");
//  for (j = 1; j < selElmnt.length; j++) {
//    /*for each option in the original select element,
//    create a new DIV that will act as an option item:*/
//    c = document.createElement("DIV");
//    c.innerHTML = selElmnt.options[j].innerHTML;
//    c.addEventListener("click", function(e) {
//        /*when an item is clicked, update the original select box,
//        and the selected item:*/
//        var y, i, k, s, h;
//        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//        h = this.parentNode.previousSibling;
//        for (i = 0; i < s.length; i++) {
//          if (s.options[i].innerHTML == this.innerHTML) {
//            s.selectedIndex = i;
//            h.innerHTML = this.innerHTML;
//            y = this.parentNode.getElementsByClassName("same-as-selected");
//            for (k = 0; k < y.length; k++) {
//              y[k].removeAttribute("class");
//            }
//            this.setAttribute("class", "same-as-selected");
//            break;
//          }
//        }
//        h.click();
//    });
//    b.appendChild(c);
//  }
//  x[i].appendChild(b);
//  a.addEventListener("click", function(e) {
//      /*when the select box is clicked, close any other select boxes,
//      and open/close the current select box:*/
//      e.stopPropagation();
//      closeAllSelect(this);
//      this.nextSibling.classList.toggle("select-hide");
//      this.classList.toggle("select-arrow-active");
//    });
//}
//function closeAllSelect(elmnt) {
//  /*a function that will close all select boxes in the document,
//  except the current select box:*/
//  var x, y, i, arrNo = [];
//  x = document.getElementsByClassName("select-items");
//  y = document.getElementsByClassName("select-selected");
//  for (i = 0; i < y.length; i++) {
//    if (elmnt == y[i]) {
//      arrNo.push(i)
//    } else {
//      y[i].classList.remove("select-arrow-active");
//    }
//  }
//  for (i = 0; i < x.length; i++) {
//    if (arrNo.indexOf(i)) {
//      x[i].classList.add("select-hide");
//    }
//  }
//}
///*if the user clicks anywhere outside the select box,
//then close all select boxes:*/
//document.addEventListener("click", closeAllSelect);
//});
// 

$(".custom-select2").each(function () {
	var classes = $(this).attr("class"),
		id = $(this).attr("id"),
		name = $(this).attr("name");
	var template = '<div class="' + classes + '">';
	template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
	template += '<div class="custom-options">';
	$(this).find("option").each(function () {
		template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
	});
	template += '</div></div>';

	$(this).wrap('<div class="custom-select-wrapper"></div>');
	$(this).hide();
	$(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
	$(this).parents(".custom-options").addClass("option-hover");
}, function () {
	$(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
	$('html').one('click', function () {
		$(".custom-select2").removeClass("opened");
	});
	$(this).parents(".custom-select2").toggleClass("opened");
	event.stopPropagation();
});
$(".custom-option").on("click", function () {
	$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
	$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
	$(this).addClass("selection");
	$(this).parents(".custom-select2").removeClass("opened");
	$(this).parents(".custom-select2").find(".custom-select-trigger").text($(this).text());
});


jQuery(function ($) {
	$(document).on("click", ".sidebar-dropdown > a", function (e) {
		$(".sidebar-submenu").slideUp(200);
		if (
			$(this)
				.parent()
				.hasClass("active")
		) {
			$(".sidebar-dropdown").removeClass("active");
			$(this)
				.parent()
				.removeClass("active");
		} else {
			$(".sidebar-dropdown").removeClass("active");
			$(this)
				.next(".sidebar-submenu")
				.slideDown(200);
			$(this)
				.parent()
				.addClass("active");
		}
	});
});
$(document).ready(function () {
	$(".Passcode-visible").on('click', function (event) {
		event.preventDefault();
		if ($('#show_hide_password').attr("type") == "text") {
			$('#show_hide_password').attr('type', 'password');
			$('.Passcode-visible i').addClass("fa-eye-slash");
			$('.Passcode-visible i').removeClass("fa-eye");
		} else if ($('#show_hide_password').attr("type") == "password") {
			$('#show_hide_password').attr('type', 'text');
			$('.Passcode-visible i').removeClass("fa-eye-slash");
			$('.Passcode-visible i').addClass("fa-eye");
		}
	});
});
$(document).on("click", "#accountPopup", function (e) {
	$("#account_pop").fadeToggle();
	e.stopPropagation();
});

$(document).on("click", "#exposuremenu", function (e) {
	$("#multiBalancePop").fadeToggle();
	e.stopPropagation();
});
$(document).click(function () {
	$("#account_pop").hide();
	$("#multiBalancePop").hide();
});

$(document).on("click", ".switch input", function (e) {
	if ($(this).prop('checked')) {
		$("#collapseFivetv").addClass('in show');
	} else {
		$("#collapseFivetv").removeClass('in show');
	}
});

$(document).on("click", ".score .switch input", function (e) {
	if ($(this).prop('checked')) {
		$("#collapseFive6").addClass('in show');
	} else {
		$("#collapseFive6").removeClass('in show');
	}
});
