# Welcome to SIP/NJ Library!

Hi!, I'm **Juan Jimenez** and in collaboration with my friend **Noe Gomez** we have developed this library to support the **FinMC/SIP company**.

Together our areas have gathered styles and sections of code as well as custom functions for the compilation of this library. One of our priorities is to automate the layout and development of landing pages, funnels among other pages in an automated way so that everyone in our area gets involved in their development and it is easier for them to edit and build them.

## Use

To incorporate our library via composer, you need to execute the following command in the project folder

    composer require juanjimeneztj/gsweb

This command will download the files necessary for the use of the library in general, this library includes compilations of both Bootstrap and Fontawesome so that it is not necessary to incorporate them remotely, although you always have the possibility of doing so if you wish.

To include the library in the project you are developing, you only have to add the following files to your project:

 - bootstrap.min.css 
 - gsweb.css 
 - fontawesome.all.css 
 - gsweb.js

Here is an example:

**CSS:**

    <link  rel="stylesheet"  href="./vendor/juanjimeneztj/gsweb/dist/css/bootstrap.min.css">
    <link  rel="stylesheet"  href="./vendor/juanjimeneztj/gsweb/dist/css/gsweb.css">
    <link  rel="stylesheet"  href="./vendor/juanjimeneztj/gsweb/dist/css/fontawesome.all.css">

**JS:**

    <script src="./vendor/juanjimeneztj/gsweb/dist/js/gsweb.js" async></script>

**It is very important to include the Jquery library, since the project is based on it, otherwise certain options / functions will stop working.**

Here is one of the libraries that we use but it may be the one of your preference, the only requirement is that it be higher than version.

    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'></script>

## Custom functions

### ---- SMS Form ----

This code and its functions, what they are responsible for is to enable or disable the form button if the specified checkbox has not been checked.

This is an example of a form with this function included:

    <form  action="./"  method="GET"  name="form1"  class="mt-4">
          <div  class="form-group">
               <label  class="sms-check-label">
                     <input  class="form-check-label sms-check-checkbox" 
                     type="checkbox"  name="checkSMS"  required> I agree to 
                     receive automated calls, text messages, and prerecorded 
                     messages about <em>Company_name</em> events, content 
                     and promotions to the phone number I provide and 
                     understand consent is not a condition of any purchase.
                </label>
           </div>
           <button  type="submit"  class="btn btn-block btn-lg btn-primary 
           sms-disabled"  disabled>Submit</button>
    </form>

It is similar to the structure of a **bootstrap** form but with some additional classes that will help us so that this function can validate these values. The only condition is to use the same level of the structure because if it changes the function may not work correctly.

#### Use

Once we have the structure of the form, we will add the custom class **"sms-check-label"** to our label.


    <form  action="./"  method="GET"  name="form1"  class="mt-4">
          <div  class="form-group">
               <label  class="sms-check-label">
                     <input  class="form-check-label" 
                     type="checkbox"  name="checkSMS"  required> I agree to 
                     receive automated calls, text messages, and prerecorded 
                     messages about <em>Company_name</em> events, content 
                     and promotions to the phone number I provide and 
                     understand consent is not a condition of any purchase.
                </label>
           </div>
           <button  type="submit"  class="btn btn-block btn-lg btn-primary">
                 Submit
           </button>
    </form>

Once this is done, we proceed to add the class **"sms-check-checkbox"** to the input inside our **label**:


    <form  action="./"  method="GET"  name="form1"  class="mt-4">
          <div  class="form-group">
               <label  class="sms-check-label">
                     <input  class="form-check-label sms-check-checkbox" 
                     type="checkbox"  name="checkSMS"  required> I agree to 
                     receive automated calls, text messages, and prerecorded 
                     messages about <em>Company_name</em> events, content 
                     and promotions to the phone number I provide and 
                     understand consent is not a condition of any purchase.
                </label>
           </div>
           <button  type="submit"  class="btn btn-block btn-lg btn-primary">
                 Submit
           </button>
    </form>

Finally is to add one more class to our **button** as well as an attribute:

We add the class **"sms-disabled"** to the button of the form and also the attribute **"disabled",** being as follows:

    <form  action="./"  method="GET"  name="form1"  class="mt-4">
          <div  class="form-group">
               <label  class="sms-check-label">
                     <input  class="form-check-label sms-check-checkbox" 
                     type="checkbox"  name="checkSMS"  required> I agree to 
                     receive automated calls, text messages, and prerecorded 
                     messages about <em>Company_name</em> events, content 
                     and promotions to the phone number I provide and 
                     understand consent is not a condition of any purchase.
                </label>
           </div>
           <button  type="submit" class="btn btn-block btn-lg btn-primary 
           sms-disabled" disabled>
                 Submit
           </button>
    </form>

#### Important!!!

This last modification to the button is only if the checkbox is not checked, if you leave the checkbox checked by default, you should skip this last step

