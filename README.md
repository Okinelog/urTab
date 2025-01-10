<p align="center">
  <img src="https://www.urbanhacks.co/static/img/logo/beyaz_logo.png">
</p>

# 📍 urTab

**urTab**, lets you quickly create tab menu with pure js.

> ### Setup
> 1. Download the "urtab.js" file.
> 2. Create the "index.html" file.
> 3. Pass the following template
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>.</title>
</head>
<body>
    <div id="TabBox1" class="TabBox">
        <div class="TabHeaders">
            <div class="TabTitle Active" order="1">Tab 1 Title</div>
            <div class="TabTitle" order="2">Tab 2 Title</div>
            <div class="TabTitle" order="3">Tab 3 Title</div>
        </div>
        <div class="TabBodys">
            <div class="TabContent Active" order="1">
                <h1>Tab 1</h1>
            </div>
            <div class="TabContent" order="2">
                <h1>Tab 2</h1>
            </div>
            <div class="TabContent" order="3">
                <h1>Tab 3</h1>
            </div>
        </div>
    </div>
    <script src="/js/urtab.js"></script>
    <script>
        tab = new urTab("TabBox1", "Active", "order");
    </script>
</body>
</html>
```
> ## Ready!
