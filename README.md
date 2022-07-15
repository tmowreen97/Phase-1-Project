# **RAND-TIVITIES**
## Phase-1 Project

For my Phase 1 Project I've created an interactive web page that allows the user to select a category from a drop down list, and in return the page generates a random activity within that category. This web page uses the data from *www.boredapi.com* which is a no authorization free API. 

A little about the API, it generates a random object that contains a few key-value pairs. The object keys are as follows; *activity*, *type*, *participants*, *price*, *link*, *key*, and *accessibility*. This page utilizes the values of the *activity* and *type* keys. The *activity* is the random activity the page generates, and the *type* is the category the user selects.

When the user navigates to this webpage, the screen shows a box titled ***Rand-tivities*** with a box below labeled *Pick a Category*, and another blank box below it. Whenever the user hovers over the title ***Rand-tivities*** with their mouse, the title changes into a random color!

The *Pick a Category* box has a drop-down list with a prefilled text 'Select an Option' and an 'enter' button. When the user clicks on the 'Select an Option' drop-down, they have 9 categories they can choose from: 

* busywork
* cooking
* charity
* diy
* education
* music
* recreational
* relaxation
* social

Once an option is selected and the user clicks enter, a random activity from the API is displayed in the box below *Pick a Category*. The random activity also has an 'Add to Liked' button below it. If the user clicks on that, another box appears on the bottom labeled *Liked*. That same activity is then listed in the *Liked* box as part of a bulleted list. The user can select different categories and get as many activities as they'd like to. They can also add as many activities to their *Liked* section. This *Liked* box will keep its contents, until the page is refreshed.

With a page like this, you'll always find something to do!
