# myalbums

## Project setup
```
npm install
```

### Project start
```
npm start
```

### Compiles and minifies for gulp
```
gulp wacth
```
### General Desc.
```
--> Started application file is app.js;
--> Gulp settings file is gulpfile.js
   --> gulp assets js and scss/sass file in public js and stylelsheets
   --> view layout: 
          Layout.jade:
            ->sidebar.jade;
            ->homepage.jade;
          Login.jade:
```



### File description

```
 ./assets      = js and scss file
  ./bin         = project port and env.
  ./controllers = Login and MyAlbum controllers
  ./public      = jade file using this js, stylesheets
  ./routes      = project route files  index and login
  ./services    = api request service
  ./views       = project view template
```
 
  
  
### Project lifecycle
  
  ```
  project-started -> 
        login page -> 
        " basic " form control and user crendetials control. -> 
        go to albums page -> 
        select the albums ->
        thumbnails view ->
        select the thumbnail ->
        and show the big photo of thumbnails.
```
  
  
        
        
### HttpRequest:

```
I used 'superagent' and 'xhrHttpRequest' when making http requests
  and you can see example usage axios and ajax request.
```

  
  


  
  
