# ⌚ Dynamic dates & time using only HTML! ⌚

> You can only get the dates and times by using a script included (exactly JavaScript) in the internal HTML file or an external local file. With this library, you have the option of showing dates and times without join or code lines in JS.

## Let's start with how exactly does it work?
The secret is based on the use of classes in the HTML file. This library working just like **bootstrap.**
> When you add **JS-Time** defined class to your HTML tag *(you can use div, span)* the script locates all overwritten tags and changes their content to valid date or time. Thanks to this, you won't have to execute JS on your side.

## What classes can I use?
**JS-Time** has a lot of classes defined that refer to dates and times. Currently, script have two groups (date and time). Each of them have a few classes.

All classes from time group you can see below:
```HTML
<div class="jt-time" jt-update="true"></div>
<div class="jt-hour" jt-update="true"></div>
<div class="jt-minute" jt-update="true"></div>
<div class="jt-second" jt-update="true"></div>
```
> As you probably noticed, there's a new attribute in the div tag. **jt-update** is used to check if you want to update given class. Notice: This atributte working only with time group.

All classes from date group you can see below:
```HTML
<div class="jt-date">DD-MM-YYYY</div>

<div class="jt-year"></div>
<div class="jt-month"></div>
<div class="jt-month-name"></div>
<div class="jt-day"></div>
```
> All classes in this group work with no content except **jt-date**. This class requires data format in content. You can apply any format with the appropiate date parametrs.
> In **jt-date** class you can also replace the number of the mounth to month name using **MN** parameter.
+ Example:
```HTML
<div class="jt-date">DD-MN-YYYY</div>
<div class="jt-date">YYYY-MM-DD</div>
```
