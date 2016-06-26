This plugin will try to convert line breaks inside paragraphs(p tag) into html `<br>` tags.

For example:

```
this is line one
this is line two.
```

In standard markdown(which gitbook adopts), these two lines will be put in one line. In order to separate them into 2 lines, 
you have to either add 2 spaces at the end of first line or add a blank row between the 2 lines. This is quite inconvenient.

### How to install
Add the following configuration into your book.json file.
```
{
    "plugins": ["lb2br"]
}
```

Type `gitbook install` to install this plugin

Then if you use `gitbook pdf path_to_your_book mybook.pdf` to generate a pdf book. This plugin will take effect.

### Issues
I don't know how to enable plugins in gitbook editor, such that i can preview the result directly in gitbook editor.
If you know, please raise a issue in github repository, thanks.


