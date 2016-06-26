This plugin will try to convert line breaks inside paragraphs(p tag) into html `<br>` tags.


### How to install
Add the following configuration into your book.json file.
```
{
    "plugins": ["lb2br"]
}
```

Type `gitbook install` to install this plugin

Use `gitbook pdf path_to_your_book mybook.pdf` to generate a pdf book.

### How it works

Take the following 2 sentences for example:

this is line one<br>
this is line two.

These 2 lines will be put into 2 lines in github issues page(as well as in [MWeb editor][1]). The converted html code will be

```html
<p>this is line one<br>
this is line two.</p>
```

However, gitbook uses [standard markdown syntax](http://daringfireball.net/projects/markdown/syntax#p), these two lines will be put into one line. 
The converted html code in gitbook will be

```html
<p>this is line one
this is line two.</p>
```

In order to separate them into 2 lines, you either add 2 spaces at the end of the first line or you add a blank row between the 2 lines. 
This is quite inconvenient.

This plugin will convert line breaks inside p tags into html `<br>` tag, the same as github issues page does.

### Issues
I don't know how to enable plugins in gitbook editor, such that i can preview the results directly in gitbook editor.
If you know, please raise an issue :) Thanks.


[1]: http://www.mweb.im/