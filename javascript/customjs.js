/***********DATAPICKER RANGE*************/
$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'center',
        showCustomRangeLabel: false,
        minDate: 0
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
    });
});
/***********DATAPICKER RANGE*************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/*****************ADULT AND CHILD COUNTER INPUT ALLOW ONLY NUMBERS***********************/
(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));
/************FOR ADULT INPUT***************/
$(document).ready(function() {
    $(".adult-number").inputFilter(function(value) {
        return /^\d*$/.test(value); // Allow digits only, using a RegExp
    });
});
/************FOR ADULT INPUT***************/
/************FOR CHILD INPUT***************/
$(document).ready(function() {
    $(".child-number").inputFilter(function(value) {
        return /^\d*$/.test(value); // Allow digits only, using a RegExp
    });
});
/************FOR CHILD INPUT***************/
/*****************ADULT AND CHILD COUNTER INPUT ALLOW ONLY NUMBERS***********************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/******************ADULT COUNTER*********************/

/***PLUS***/
$(document).ready(function() {
    $(".adult-plus").on("click", function() {
        var adults = $(".adult-number").val();
        adults++;
        if (adults > 99) {
            adults = 99;
            $("input[name=adult-persons]").val(adults);
        } else {
            adults + 1;
            $("input[name=adult-persons]").val(adults);
        }
    });
});
/***PLUS***/
/***MINUS***/
$(document).ready(function() {
    $(".adult-minus").on("click", function() {
        var adults = $(".adult-number").val();
        adults--;
        if (adults < 1) {
            adults = 1;
            $("input[name=adult-persons]").val(adults);
        } else {
            adults - 1;
            $("input[name=adult-persons]").val(adults);
        }
    });
});
/***MINUS***/
/******************ADULT COUNTER*********************/
/****||||||||||||||||||||||||||||||||||||***/
/**********************CHILD COUNTER*****************/
/***PLUS***/
$(document).ready(function() {
    $(".child-plus").on("click", function() {
        var childs = $(".child-number").val();
        childs++;
        if (childs > 99) {
            childs = 99;
            $("input[name=child-persons]").val(childs);
        } else {
            childs + 1;
            $("input[name=child-persons]").val(childs);
        }
    });
});
/***PLUS***/
/***MINUS***/
$(document).ready(function() {
    $(".child-minus").on("click", function() {
        var childs = $(".child-number").val();
        childs--;
        if (childs < 0) {
            childs = 0;
            $("input[name=child-persons]").val(childs);
        } else {
            childs - 1;
            $("input[name=child-persons]").val(childs);
        }
    });
});
/***MINUS***/
/******************CHILD COUNTER*********************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/**********************************************************************************************/
/********************************CROSS BETWEEN TABS********************************************/
/**********************************************************************************************/
/********************HOTEL AND DATE PASSING TO ROOM AND VIEW TAB*************************/
$(document).ready(function() {
    $("#hotel-date-save-btn").on("click", function() {
        var selectedHotel = $("#hotel-select option:selected").text();
        var selectedDate = $("#datepicker").val();
        var selectedAdult = $(".adult-number").val();
        var selectedChild = $(".child-number").val();
        if (selectedHotel == "Otel Seçiniz") {
            alert("Lütfen Bir Otel Seçiniz!")
        } else {
            $(".hotel-and-date-tab").addClass("tab-hider");
            $(".room-view-tab").removeClass("tab-hider");
            $(".reserv-step-circle-1").addClass("unreached-step");
            $(".reserv-step-circle-2").removeClass("unreached-step");
            /***SELECTED HOTEL, DATE, ADULT AND CHILD NUMBER***/
            $(".choosen-hotel").text(selectedHotel);
            $(".choosen-date").text(selectedDate);
            $(".choosen-adult").text(selectedAdult);
            $(".choosen-child").text(selectedChild);
            /***SELECTED HOTEL, DATE, ADULT AND CHILD NUMBER***/
            /***SELECTED HOTEL, DATE, ADULT AND CHILD TO PAYMENT TAB***/
            $(".selected-hotel").text(selectedHotel);
            $(".selected-date").text(selectedDate);
            $(".selected-adult").text(selectedAdult);
            $(".selected-child").text(selectedChild);
            /***SELECTED HOTEL, DATE, ADULT AND CHILD TO PAYMENT TAB***/
            /*****SELECTED HOTEL, DATE, ADULT AND CHILD TO FINAL TAB*********/
            $(".reserv-hotel").text(selectedHotel);
            $(".reserv-date").text(selectedDate);
            $(".reserv-adult").text(selectedAdult);
            $(".reserv-child").text(selectedChild);
            /*****SELECTED HOTEL, DATE, ADULT AND CHILD TO FINAL TAB*********/
        }
    });
});
/********************HOTEL AND DATE PASSING TO ROOM AND VIEW TAB*************************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/*********************ROOM AND VIEW TAB BACK TO HOTEL AND DATE TAB**********************/
$(document).ready(function() {
    $("#room-view-tab-go-back-btn").on("click", function() {

        $(".hotel-and-date-tab").removeClass("tab-hider");
        $(".reserv-step-circle-2").addClass("unreached-step");
        $(".reserv-step-circle-1").removeClass("unreached-step");
        $(".room-view-tab").addClass("tab-hider");

    });
});
/*********************ROOM AND VIEW TAB BACK TO HOTEL AND DATE TAB**********************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/**********************ROOM AND VIEW TAB TO PAYMENT***************************************/
$(document).ready(function() {
    $("#room-view-tab-save-btn").on("click", function() {
        if (!$("input[name=room-typer]").is(":checked") || !$("input[name=view-typer]").is(":checked")) {
            alert("Lütfen oda tipi ve manzara seçiniz!")
        } else {
            /*****GETTING ROOM TYPE AND VIEW*******/
            var selectedRoomType = $("input[name=room-typer]:checked", ".room-view-form").val();
            var selectedView = $("input[name=view-typer]:checked", ".room-view-form").val();
            /*****GETTING ROOM TYPE AND VIEW*******/
            /**********VIEW AND ROOM TYPE DATA'S MOVE TO PAYMENT TAB*************/
            $(".selected-room-type").text(selectedRoomType);
            $(".selected-view").text(selectedView);
            /**********VIEW AND ROOM TYPE DATA'S MOVE TO PAYMENT TAB*************/
            /**********VIEW AND ROOM TYPE DATA'S MOVE TO FINAL TAB*************/
            $(".reserv-room").text(selectedRoomType);
            $(".reserv-view").text(selectedView);
            /**********VIEW AND ROOM TYPE DATA'S MOVE TO FINAL TAB*************/
            $(".room-view-tab").addClass("tab-hider");
            $(".payment-tab").removeClass("tab-hider");
            $(".reserv-step-circle-2").addClass("unreached-step");
            $(".reserv-step-circle-3").removeClass("unreached-step");
        }
    });
});
/**********************ROOM AND VIEW TAB TO PAYMENT***************************************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/*********************PAYMENT TAB BACK TO ROOM AND VIEW TAB**********************/
$(document).ready(function() {
    $("#payment-tab-go-back-btn").on("click", function() {
        $(".payment-tab").addClass("tab-hider");
        $(".room-view-tab").removeClass("tab-hider");
        $(".reserv-step-circle-3").addClass("unreached-step");
        $(".reserv-step-circle-2").removeClass("unreached-step");
    });
});
/*********************PAYMENT TAB BACK TO ROOM AND VIEW TAB**********************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/**********************PAYMENT TO RESERVATION FINISHED TAB*********************************************/
$(document).ready(function() {
    $("#payment-tab-save-btn").on("click", function() {
        var cardNumber = $("#card-number").val().length;
        var cardCVV = $("#cvv").val().length;
        var cardName = $("#card-name").val().length;
        if (cardNumber < 16 || cardCVV < 3 || cardName < 3) {
            alert("Lütfen kart bilgileriniz kontrol ediniz!");
        } else {
            $(".payment-tab").addClass("tab-hider");
            $(".reserv-steps").addClass("tab-hider")
            $(".reservation-finished-tab").removeClass("tab-hider");
        }
    });
});
/**********************PAYMENT TO RESERVATION FINISHED TAB*********************************************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/**********************************************************************************************/
/********************************CROSS BETWEEN TABS********************************************/
/**********************************************************************************************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/********************CHOOSEN HOTEL, DATE AND PERSONS**********************/

/********************CHOOSEN HOTEL, DATE AND PERSONS**********************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/*****************CARD INFORMATOIN FORMS*****************/
/***CARD NUMBER ALLOW ONLY NUMBER***/
$(document).ready(function() {
    $("#card-number").inputFilter(function(value) {
        return /^\d*$/.test(value); // Allow digits only
    });
});
/***CARD NUMBER ALLOW ONLY NUMBER***/
/***CVV ALLOW ONLY NUMBER***/
$(document).ready(function() {
    $("#cvv").inputFilter(function(value) {
        return /^\d*$/.test(value); // Allow digits only
    });
});
/***CVV ALLOW ONLY NUMBER***/
/*****************CARD INFORMATOIN FORMS*****************/
/**************CARD NUMBER TO VIRTUAL CARD***************/
$(document).ready(function() {
    $("#card-number").keyup(function() {
        $(".card-number").html($("#card-number").val())
    });
});
/**************CARD NUMBER TO VIRTUAL CARD***************/
/**************CARD COSTUMER NAME TO VIRTUAL CARD***************/
$(document).ready(function() {
    $("#card-name").keyup(function() {
        $(".customer-name").html($("#card-name").val())
    });
});
/**************CARD COSTUMER NAME TO VIRTUAL CARD***************/
/**************CARD CVV TO VIRTUAL CARD***************/
$(document).ready(function() {
    $("#cvv").keyup(function() {
        $(".cvv").html($("#cvv").val())
    });
});
/**************CARD CVV TO VIRTUAL CARD***************/
/**************CARD MONTH TO VIRTUAL CARD***************/
$("#card-month").change(function() {
    var selectedCardMonth = $("#card-month option:selected").text();
    $(".card-selected-month").text(selectedCardMonth);
});
/**************CARD MONTH TO VIRTUAL CARD***************/
/**************CARD YEAR TO VIRTUAL CARD***************/
$("#card-year").change(function() {
    var selectedCardYear = $("#card-year option:selected").text();
    $(".card-selected-year").text(selectedCardYear);
});
/**************CARD YEAR TO VIRTUAL CARD***************/
/*****************CARD INFORMATOIN FORMS*****************/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/****||||||||||||||||||||||||||||||||||||***/
/************************FINAL UPDATE RESERVATION BUTTON****************************/
$(document).ready(function() {
    $(".update-reservation").on("click", function() {
        $(".reservation-finished-tab").addClass("tab-hider");
        $(".hotel-and-date-tab").removeClass("tab-hider");
        $(".reserv-steps").removeClass("tab-hider");
    });
});
/************************FINAL UPDATE RESERVATION BUTTON****************************/
/************************FINAL NEW RESERVATION BUTTON****************************/
$(document).ready(function() {
    $(".new-reservation").on("click", function() {
        location.reload();
    });
});
/************************FINAL NEW RESERVATION BUTTON****************************/
/*****************************************************************/
/******************|||||||||||||||||||||||||||||||||******************/
/********************************DELETE RESERVATION*********************************/
/******************|||||||||||||||||||||||||||||||||******************/
/*****************************************************************/
/************************FINAL DELETE RESERVATION BUTTON****************************/
$(document).ready(function() {
    $(".delete-reservation").on("click", function() {
        $(".delete-reserv-popup").removeClass("tab-hider");
    });
});
/************************FINAL DELETE RESERVATION BUTTON****************************/
/************************FINAL DELETE RESERVATION POP UP DECLINE****************************/
$(document).ready(function() {
    $(".decline").on("click", function() {
        $(".delete-reserv-popup").addClass("tab-hider");
    });
});
/************************FINAL DELETE RESERVATION POP UP DECLINE****************************/
/************************FINAL DELETE RESERVATION POP UP ACCEPT****************************/
$(document).ready(function() {
    $(".accept").on("click", function() {
        $(".delete-reserv-popup").addClass("tab-hider");
        $(".deleted-confirm-message").removeClass("tab-hider");
    });
});
/************************FINAL DELETE RESERVATION POP UP ACCEPT****************************/
/********************************DELETED CONFIRM MESSAGE OK BUTTON**************************************/
$(document).ready(function() {
    $(".ok").on("click", function() {
        location.reload();
    });
});
/********************************DELETED CONFIRM MESSAGE OK BUTTON**************************************/
/*****************************************************************/
/******************|||||||||||||||||||||||||||||||||******************/
/********************************DELETE RESERVATION*********************************/
/******************|||||||||||||||||||||||||||||||||******************/
/*****************************************************************/