"use strict";

$(document).ready(function () {
  const input = document.querySelector(".input-box");
  const button = document.querySelector(".cta");
  const container = document.querySelector(".result-box");

  //event callback function declaration
  function newActivities() {
    //element creating
    const activitiesContainer = document.createElement("div");
    const newText = document.createTextNode(input.value);
    const textContainer = document.createElement("div");
    const newheadline = document.createElement("h3");
    const deleteButton = document.createElement("button");
    const checkButton = document.createElement("button");
    const buttonContainer = document.createElement("div");
    const newDelete = document.createTextNode("delete");
    const newCheck = document.createTextNode("done");
    //class adding
    $(newheadline)
      .addClass("activities")
      .appendTo(textContainer)
      .append(newText);
    $(activitiesContainer).addClass("newcontainer").appendTo(container);
    $(deleteButton)
      .addClass("delete")
      .appendTo(buttonContainer)
      .append(newDelete);
    $(checkButton)
      .addClass("checklist")
      .appendTo(buttonContainer)
      .append(newCheck);
    $(textContainer).addClass("textcontainer").appendTo(activitiesContainer);
    $(buttonContainer).addClass("buttons").appendTo(activitiesContainer);

    $(deleteButton).click(function () {
      $(activitiesContainer).hide("slow", function () {
        $(activitiesContainer).remove();
      });
    });
    $(checkButton).click(function () {
      if (checkButton.innerText == "done") {
        checkButton.innerText = "undone";
      } else {
        checkButton.innerText = "done";
      }
      newheadline.classList.toggle("active");
    });
  }

  $(button).click(function () {
    newActivities();
    input.value = "";
  });
});
