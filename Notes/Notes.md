# ANGULAR

## Introduction and Basics
- [What is Angular](#what-is-angular)
- [Creating first Angular Project](#creating-first-angular-project)
- [How does an angular app gets loaded and started](#how-does-an-angular-app-gets-loaded-and-started)
- [Components](#components)
- [Data Binding](#data-binding)
- [Directives](#directives)

## Components and Data Binding
- [Property and Event Binding](#property-and-event-binding)
- [Binding to Custom Properties](#binding-to-custom-properties)
- [Binding to Custom Events](#binding-to-custom-events)
- [Getting Access to Template and DOM](#getting-access-to-template-and-dom)
- [Component Life Cycle](#component-life-cycle)

## Directives
- [Recap of Directives](#recap-of-directives)
- [Creating Basic Attribute Directive](#creating-basic-attribute-directive)
- [Renderer](#renderer)
- [HostListener](#hostlistener)
- [HostBinding](#hostbinding)
- [Structural Directives](#structural-directives)

## Services
- [Why do we need Service](#why-do-we-need-service)
- [Injecting Services](#injecting-services)
- [Hierarchial Injector](#hierarchial-injector)
- [Injecting Service in Service](#injecting-service-in-service)

## Routing
- [Why do we need Router](#why-do-we-need-router)
- [Setting Up Routes](#setting-up-routes)
- [Router Link](#router-link)
- [Understanding Navigation Paths](#understanding-navigation-paths)
- [Navigating Programmatically](#navigating-programmatically)
- [Passing Parameters to Routes](#passing-parameters-to-routes)
- [Fetching Route Parameters](#fetching-route-parameters)
- [Passing Query Parameters and Fragments](#passing-query-parameters-and-fragments)
- [Fetching Query Parameters and Fragment](#fetching-query-parameters-and-fragment)
- [The Child Nesting Route](#the-child-nesting-route)
- [Using The Query Parameters](#using-the-query-parameters)
- [Redirecting and Wildcard Routes](#redirecting-and-wildcard-routes)
- [Outsourcing the Route](#outsourcing-the-route)
---
## **What is Angular**

Angular is simply a javascript framework designed so that we can create web pages on a single page (SPAs).

The advantages of such method is that we create a reactive page for user experience and also it is much faster to load different pages in js than from server.

In angular there is only one single web page and that page contains all different components in it which feels like different web pages for user but in fact comes under a single web page.

[^Top](#introduction-and-basics)

---
## **Creating first Angular Project**
To create an angular project we need to install angular cli to our system, along with node js. Node js is required to run the npm commands and we require npm commands to create the project.

The npm command is availabel once we download angular cli.

Then once everything is install just simply type

```
ng new my-first-app
```
[^Top](#introduction-and-basics)

---

## **How does an angular app gets loaded and started**
When we createan angular application we create certain in built files. So when we go for ng serve our main html file, i.e. index.html starts running.

Now when this file starts it has the <app-selector> tag in its code and this selector is also there in app-component.ts file and so this index html file calls the app-component html file and we see the code.

But here one interesting question arises. How does angular knows that we have an app component. For that we have one main.ts file. This is the main ts file and its the file that gets executed first.

If we open the file we have one call to the bootstrap which requires an array argument to pass.

This call refers to the app.module.ts file and in that file we pass the bootstrap array with app component.

So now here at this point our angular application is told that at runtime you should know a component as app component. So when our index.html gets executed this component is called.

[^Top](#introduction-and-basics)

---

## **Components**

Components are the building blocks for any angular application. We build our whole project using components.

We can create components in 2 ways. Manually or using angular cli.

Angular cli method is more preferred as it gives us with reduced headache of referring modules and all but we should manual too.

```TypeScript
ng generate component component-name-here
```

This generates a component with required name.

When we create a component then in the app-modules section that components gets imported. 

In app module NgModule tag we have certain properties :-
Declarations basically for declaration of the components here
imports for module imports.
providers for services
bootstrap to tell which all components the angular should know before the start of project.

Now these properties are for angular to know these exist but for typescript we need to import all these things above this using import method.

When we create a component we declare a component keyword with 3 properties of selector,templateUrl and styleurl

In Selector we tell the type of selector we have to use to call this particular component.The selector can be anything, a class, attribute or the element itself(by default element).

In the templateUrl we have 2 options go with template or url. If its template then the html part of the component is wriiten there only and if its url we give path for the html file. But we can have only one url here.

The last part by default which comes is stylesUrl. Here we have an array in which we can specify the urls for different css files which will be used for the component. Here also we can have url or just styles like above scenario.


[^Top](#introduction-and-basics)

---

## **Data Binding**
Data binding is way of communicating between the html page and the ts or typescript page of the project.

Data binding is mainly of 2 types :-

1.  One way data binding.
2. Two way data binding.

One way data binding is achieved through string interpolation and property binding and event binding.

For two way data binding we use ngModel.

**String Interpolation**
We have simple syntax for the above.
We just declare a method or variable in the ts file and when we have to call it in html we use curly braces.

```TypeScript
    {{variablenamehere}}
```
**Property Binding**
For property binding the simple point is that any html element have certain properties so if we wish to change them dynaically then we use property binding

```TypeScript
    [propertynamehere]="variablenamehere"
```

**Event Binding**
When we do any action or activity in the dom certain events get triggered. So on these trigger of events we can bind them to any variable or function method.

```TypeScript
    (click)="variablenamehere"
```

**Two way binding**
In case of two way binding we use a different kind of variable or system. Here we use [(ngModel)] and bind this with any variable name.

Now here when we bind tis variable name so if we update this in our dom it gets updated in the ts file too.

```TypeScript
    [(ngModel)] = "variablenamehere"
```

[^Top](#introduction-and-basics)

---

## **Directives**
Directives are basically instructions to give to dom.

A component is also a directive. A directive typically contains @Directive symbole in the start and then there is information regarding that directive. Just like we studied for component.

We can create our own directives but there are certain built in directives too.

**ngIf** 

This directive is used to output the content in dom based on condition.

Since it changes the structure of dom it is also called as structural directive. If the condition mentioned inside ngif becomes true then that element is seen else not.

Syntax :-
```TypeScript
*ngIf = "Condition or variable or a method here returning boolean value"
```
>Here we use * before ngif as it is syntax that represents a structural directive 

We can extend the ngif by also using else with it syntax for which is :-

```TypeScript
    *ngIf = "Condition or variable or a method here returning boolean value; else variable name to the other element"
```

But generally we don't preferr else as we need to give a variable name to element tag and also we need to enclose else element inside <ng-template> tag. 

A better solution is use ! before the condition you are giving for ngif.

**ngStyle**

If we want to dynamically change the style for any element then we use ngstyle.

Syntax :-

```TypeScript
    [ngStyle] = "{backgroundColor:blue}"
```

Since ngStyle is not a structural directive we don't use * here but we use [] to bind it with properties(just like property binding). 
>Ngstyle expects a javascript object to be passed to it.

Since it requires javascript object, the key is the property name and value is the condition or value for that property.

**ngClass**

Previously we saw how to change the style and properties of an element using ngstyle. We can also dynamically add or remove a class from an element and that can be done using ngClass.

Same like ngStyle it also requires a javascript object to be passed and also we use [] brackets just like ngStyle.

```TypeScript
[ngClass] = {classname:'condition or method here'}
```

Since it requires javascript object we have classname as key and condition as value.

**ngFor**

We have another structural directive called ngFor.

Now if we want to list out an array of values in our elements we use ngFor just like the for loop.

It is also a structural directive so we use * with it.

Syntax :
```TypeScript
*ngFor = "let server of servers"
```

Here server is the variable provided by us to loop through the variable servers which is declared in the ts file containing all values.

> A very important point for ngFor. Since its a for loop sometimes in our code we want to access the index of the point of the loop where we are currently in the array. So either we can make a variable as count for that in our ts file or simply we can change the syntax a bit to get the index.

```TypeScript
*ngFor = "let server in servers; let i=index"
```

> Now this i will have current position in the loop.It will start from 0 and so on.

[^Top](#introduction-and-basics)

---

## **Property and Event Binding**

We have already seen the built in property and event binding methods and ways in which that can be done effectively.

Now if we create our own property and our own event and we need to communicate that across the components then we need to use some other methods.

[^Top](#components-and-data-binding)

---

## **Binding to Custom Properties**
We sometimes needs to communicate with the custom properties and need to send the data values from the parent component to the child component.

For that purpose we use the keyword **@Input**

Steps :-
1. Let suppose we have one child component as server-element and our parent component is app.
2. Now in parent component using ngFor we are looping through each server-element and calling it again and again to create list of components.
3. But we have servers array object in app component only and not in server-element.
4. So this will throw error as we don't have any server in server-element and we need to pass each server to server-element.
5. Here we can use property binding.
6. First we will create a property as element in server-element and then add a decorative of @Input before it.
```TypeScript
@Input() element = {name:string,type:string,content:string};
```

Now just like property binding syntax we will bind this property with each server element that we are looping through in ngFor

```TypeScript
*ngFor = "let server of servers" [element] = "server"
```

> We can have a parameter inside @Input() also and this parameter is the aliasing name given to the property

[^Top](#components-and-data-binding)

---

## **Binding to Custom Events**
Same way like we binded the custom properties we can bind the events too.

In case of communicating from a child to parent we use **@Output()** decorater.

Steps :- 
1. Suppose we have child component as cockpit and parent is app.
2. Now in this cockpit component when we click on add Server button a server is getting created.
3. Now this was possible when we had all methods in app.ts but now we have a new child component.
4. So now we create a custom event of onServerCreated in app component and then pass parameters of data values we want from that event.
5. Then in cockpit component we create custom events and then we trigger them using .emit method.

```TypeScript
@Output() onServerCreate = new EventEmitter<Generic here>()
```

> Aliasing is followed here in the same way

[^Top](#components-and-data-binding)

---

## **Getting Access to Template and DOM**
We can access the template and dom in various ways as we have studied before, but we can do that in some other ways too.

1. Local Variable Reference
2. ViewChild() decorative

**Local Variable Reference**

For certain elements in our template we can assign a temporary variable

```HTML
#variablenamehere
```

This needs to be assigned inside the elements tag. Then we can use this variable anywhere in that template.

> Note that we can use the variable only in the template and not in ts file.

So next we can do is we can pass this as a parameter for any event we are referring to so that we can use it in ts file.

The value this variable will store is the whole element it is referring to.

```HTML
<input type="text" #serverName>
<button (click) = "serverMethods(serverName)"></button>
```
This variable will referr to the input element here.

**Using ViewChild()**
We have a decorative for the above purpose. The ViewChild() decorative enables us to referr to any element in the DOM in ts file.

In this decorative inside parenthesis we mention any component or any variable that we have assigned to the template(just like in previous case).

Then we assign this decorative to any variable we have created in the ts file.

The variable returns eventRef as its type.

```HTML
<input type="text" #serverName>
```
Now in ts file we have

```TypeScript
@ViewChild('serverName') serverNameInput;
```

And now we can use this variable in the ts file.
> The ViewChild() decorator has some different syntax for other versions of Angular so just check that accordingly. The part mentioned will be there.

**ng-content** 
(Read at last)

[^Top](#components-and-data-binding)

---

## **Component Life Cycle**

![component life cycle](Images/ComponentLifeCycle.jpg)

### **Lifecycle**
**ngOnChanges** Called after a bound input property changes

**ngOnInit** Called once the component is initialized

**ngDoCheck** Called during every change detection run

**ngAfterContentInit** Called after content (ng-content) has been projected into view

**ngAfterContentChecked** Called every time the projected content has been checked

**ngAfterViewInit** Called after the component’s view (and child views) has been initialized

**ngAfterViewChecked** Called every time the view (and child views) have been checked

**ngOnDestroy** Called once the component is about to be destroyed

[^Top](#components-and-data-binding)

---

## **Recap of Directives**
We have certain built in directives. We already studied about them.

**ngIf**

- The ngIf is a structural directive
- If we have certain condition according to which we want our elements to be displayed then we use ngif
- Since ngif changes structure of the page they are called structural directives

**ngFor**
- It is also structural directive
- Here we loop through an array and then using variables and index we can manipulate the html code
- To get index after the ngFor we can add a variable after putting the '.'

**ngStyle**
- To dynamically add style to the element we use ngstyle.
- It is not a structural directive
- ngStyle expects a javascript object. The key is a property of style and value is its value

**ngClass**
- To add a class dynamically to an element then we use ngClass
- It is also not a structural directive.
- It also expects a javascript object and class is the key expecting a value or a condition.

[^Top](#directives)

---

## **Creating Basic Attribute Directive**
We can also create our own directive, for our own purposes. To create our directive we can use angular cli 

```Typescript
    ng g d directive-name-here
```
Once the directive is created we have @Directive decorator at the top.

This decorator has one property of selector(as you know component is also a directive so same things apply). We declare the way we want to have the selection of the directive

Next we can add the directive here, but for that we need to get the element to which we are applying this directive.

We can get this easily in angular. We can use the elementRef in the constructor of the directive and then we can use the following code to style it 

```TYPESCRIPT
constructor(private eleRef:ElementRef){}
ngOnInit(){
    this.eleRef.nativeElement.style.backgroundColor = 'blue'
}
```

> This approach is good but has one flaw as in angular the js files gets loaded in certain bundles and certain ways so in future it may be possible that this element doesn't get loaded but we are calling its property and hence throwing an error.

[^Top](#directives)

---

## **Renderer**
To avoid the above issue we mentioned we have renderer in angular that works in a better way.

For this we create the directive as usual and then once the directive is created we then apply renderer to it in place of the element ref method

```TYPESCRIPT
constructor(private render:Renderer,private eleRef:ElementRef){}

ngOninit(){
    this.render.setStyle(element,style,property,flag)
}
```

Now here if we have to change the style then we use the setStyle method. We have other methods also for the renderer.

The first parameter it takes is element name and we can have it from elementRef.nativeElement.

The second parameter is the style and we can add the style-property in that case.

The third parameter is the value of this style property.

The fourth parameter is the flag like !important and so on.

> Renderer is a better approach to change the dom through ts file using directive.

[^Top](#directives)

---

## **HostListener**
Sometimes we also need to listen to certain events that occurs when any event occurs in the element to which our directive is pointing.

For this purpose we have **HostListener.**

Using hostlistener we listen to all the events that can occur in our element and according to that what we want to be done to our element.

Like if we want to change the style when mouseover and then remove that style once mouseleave then we can achieve this using hostlistener.

- First we create a decorator as hostlistener @Hostlistener

- This decorator has one parameter that tells about the event we want to use.

```TYPESCRIPT
@Hostlistener('mouseenter')
```
- Next we have a method name that we want to execute when this event triggers.

```TYPESCRIPT
@Hostlistener('mouseenter') mouseEnter(eventData:Event){
    this.render.setStyle(element,style,property,flag)
}
```
> We can also get the data of the element in the parameters of the method we declare.

Now when we mouse over the element then the above method executes thus making the property change on event trigger

[^Top](#directives)

---

## **HostBinding**
The render method is great but there we need to type the code a bit. So we have the hostbinding decorator for the purpose.

- In case of HostBinding we have parenthesis that carries argument as string
- In this argument we have to pass the property of the element which we want to change e.g. style.backgroundColor

> We can have other properties here too.

- Then we need to provide a variable name to this and its type i.e. how we want it to return as.

```TYPESCRIPT
@HostBinding('style.backgroundColor') backgroundColor:string;
@HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor='red';
  }
```

It works same way as renderer but it is a bit easy to use and less code required.

> Both renderer and hostbinding are good methods

> We can use the @Input method to get the data input from the component itself and then bind that with the directive.

```HTML
<p appBetterDirective [defaultColor] = "'yellow'" [highlightColor] = "'lightblue'"> Using better way</p>
```
```TYPESCRIPT
@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  constructor(private elementRef:ElementRef,private render:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor:string;
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor=this.defaultColor;
  }


}
```


[^Top](#directives)

---

## **Structural Directives**
There is an interesting point regarding the structural directives.

In structural directives we have an '*' sign before them

What actually happens behind the scene is 

- When angular sees a directive with * sign it regards it as structural.
- Angular creates a ng-template element that will surround the element to which the structural directive was added.
- After that the directive is applied to this template as a property binding like all other directives are added.

Eg :-

```HTML
<div *ngIf = "condition here">
    <p>Hello World</p>
</div>
```
This gets converted to 

```HTML
<ng-template [ngIf] = "condition here">
    <div>
        <p>Hello World</p>
    </div>
</ng-template>
```

[^Top](#directives)

---

## **Creating Structural Directive**
To create a structural directive first we create a directive like we have been.

Then we follow some steps :-

- Suppose we have to create a structural directive as unless opposite of ngIf
- Its selector is appUnless
- Then we create a set method(it is basically a property only) as appUnless for Input decorator
> Here the name of property should be same as the selector
 ```TYPESCRIPT
 @Input() set appUnless(value:boolean){

 }
 ```
- Here the value is the parameter which we will pass with the structural directive = sign.
- Then we have to add some condition and according to that condition we need to add the view or clear it.
- The view we need to add is that of the template(template because structural directive gets converted to ngtemplate behind the scenes)
- To achieve this we create viewContainerRef and TemplateContainerRef in the constructor.
- Then using the if and else condtion and the value we get from the html we add or remove the template.

```TYPESCRIPT
@Input() set appUnless(value:boolean){
    if(!value){
      this.vwC.createEmbeddedView(this.temRef);
    }
    else{
      this.vwC.clear();
    }
 }
 constructor(private vwC:viewContainerReference,private temRef:templateReference){}
```
- Now we can use this directive as ***appUnless** in our HTML file

[^Top](#directives)

---

## **Why do we need Service**
We use @input and @Output to communicate between the components. But the problem with the approach is that when we need to communicate at a very complicate hierarchy then the code becomes very complicated.

So to centralise the common things and communicate more efficiently we use service

[^Top](#Services)

---

## **Injecting Services**
In order to use services :-

- First we create a normal ts class that we use as service
- Naming convention is given as service
- Then to use this service we need to inject this to the components where we want to use the service

```Typescript
import 'Service' from 'the service folder'

export class Component
{
  constructor(private serviceVariable: Service){}
}
```
Then we can use this service variable in the file.

But we need to provide this service under the @Component

```
provider : [ServiceHere]
```

[^Top](#Services)

---

## **Hierarchial Injector**
The concept is that if we want to use the same service everywhere then we need to inject and provide the service at he highest level component.

In general if we want to use only one instance of a service everywhere we inject it at app.modules

And suppose we want a different instance at any component or directive level then we can use the provider for that specific directive or component

[^Top](#Services)

---
## **Injecting Service in Service**
Sometime we need to inject a service inside the service.

Now for components and directives we have there respective decorators which contains the provider where we can provide the service.

But in case of Service we don't have any such decorator

So we use a different decorator as
> @Injectable()

Now this decorator is used in the service file where the other service will get injected

> In other words the end point of the service where the other service gets injected need to add this decorator

[^Top](#Services)

---

## **Why do we need Router**
When we create our application we want to navigate to different places from the single page.

Now this can be achieved using other directives but the URL routing cannot.

So in order to achieve that we use Routing.

[^Top](#Routing)

---

## **Setting Up Routes**
We need to setup the routes.
- Angular routes are set up in the app.module because we are routing for whole app.
- There we create a const variable containing the route datatype.

```Typescript
const appRoute:Routes = [];
```
- This data types expects an array of objects
```Typescript
const appRoute:Routes = [{},{}];
```
- That arrays object first key is path i.e. the path we want to navigate to and the second part is the component that we want to load to that specific path.
```Typescript
const appRoute:Routes = [{path:'path here',component : componentNameHere},{path:'path here',component : componentNameHere}];
```

- Now we have added the routes but we need to tell the angular that we are providing such routes to whole app.

- Right now this variable is just in app modules.

- So in app module inside @NgModule imports we import RouterModule

```Typescript
import  :[
  RouterModule
]
```
- This router module has various built in methods and we call the ForRoot method to pass the route 

```Typescript
import  :[
  RouterModule.forRoot(appRoute)
]
```

Now we have set up our Router

[^Top](#Routing)

---

## **Router Link**
After we set up the router now we can use the path to call the desired component.

- For this we can simply call the path in the href section of the link.

```HTML
<a href = "pathofRoute">Path Name</a>
```
- But this method has a flaw. The issue is when we assign the value this way then each time we click on the link the page gets reloaded, message is sent to server and server sends a response and then we get the new component

- So to avoid such unwanted calls to server there is directive provided by the angular to achieve the task

- RouterLink. Using this directive we can avoid the reloading thing. This directive can be used in different ways. 

- The way I am using is this 

```HTML
<a [routerLink] = "['path first part here']">Path Name</a>
```
- In the above method of using the routerLink each value inside the array constitutes each path part 

[^Top](#Routing)

---

## **Understanding Navigation Paths**
The concept here is of relative and absolute path.

- In th routerLink when we provide / with path then we provide the absolute path, but when we provide nothing of such sort we give a relative path.

- The relative path is measured according to the component from where we will be using route.

- So need to take care while using the relative path

[^Top](#Routing)

---

## **Navigating Programmatically**
Using routerLink is a way to navigatethrough HTML.

But suppose on click we want something to be done and after that we want to navigate then in that case we use the program side or ts side.

- For this we need to first inject the route in the constructor
```Typescript
constructor(private routes:Router){}
```
- Now this route method we can use to navigate.

```Typescript
onClickButton(){
  this.routes.navigate(path here);
}
```

- Here we can mention the path in the same way as the routerLink

#### **Relative Path Concept in such case**

- We have the similar relative path concept just like routerLink
- But the problem is 'this.routes' does not know in which route we are currently in.
- So the problem is that even if you give a relative path in the route still it takes it as absolute.
- So in order to make it work we need to pass the ActiavtedRoute

```Typescript
constructor(private routes:Router,private activeRoute:ActivatedRoutes){}
```

- Now this route contains all the information regarding the route, including at what position we currently are in.

```Typescript
onClickButton(){
  this.routes.navigate('path here',{relativeTo:this.activeRoute});
}
```
- The navigate method of route contains one more parameter that takes a javascript object.
- Here there are various object we can use but for now we use relativeTo

[^Top](#Routing)

---

## **Passing Parameters to Routes**
We sometimes want to pass some parameters also to the url and then we need to get the value from that url.
If we want to pass the parameters in url we follow the simple steps :-

- In the app modules where we have been adding the url part there we need to make changes
- After the url part ':id'. This indicates that after the desired url we will get a parameter that we need to take care of
- Constituting to this parameter we may call a Component in the appmodule

```Typescript
{path:'servers',component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]},
```

- Ignore the children part for now as we can see that we have :id written that means we will be able to handle the parameters

- Then in the routerLink of frontened or the this.route.navigate part of ts file we mention the parameters as well.
- This mentioning of parameters can be static or dynamic

[^Top](#Routing)

---

## **Fetching Route Parameters**
Now we have passed the parameters to the url but now we need to fetch those values.

Doing that is very simple

- In the constructor of the ts file inject ActivatedRoute
- The Activated Route tells about the active route or url and hence reterieves all its data
- In the activatedRoute we have a method snapshot which tells about the snapshot of the current route at that moment.
- The snapshot in turn has the method of parameter which takes an object of the value you require.

```Typescript
constructor(private route:Router){}

ngOninit(){
  const id = this.route.snapshot.params['id'];
}
```

- Now this snapshot method has one disadvantage with it.
- If we reload the same page again from some link then also it will contain the same snapshot and suppose we changed the url after clicking the link, there will be no change in the snapshot

- In that case we use another method using the observable.

```Typescript
this.route.params.subscribe(
  (params)=>{
    //do anything here
  }
)
```
The params we got here will be the latest one even after the reload.

- There is a disadvantage with observable also, and that is performance

- So in case if we know that there will be no such reload to change the parameters always go with snapshot otherwise observable.

[^Top](#Routing)

---

## **Passing Query Parameters and Fragments**
We sometimes want to pass some parameters also to the url and then we need to get the value from that url.
If we want to pass the parameters in url we follow the simple steps :-

- For frontend side code part after routerLink directive we have few other directives.
- The first one is queryParams that contains our queryParameter
- The second is fragment that contains the fragment part

> Fragment is generally a part on the same page where we wish to go

```HTML
<a 
[routerLink] = "['/servers','edit']"
[queryParams] = "{allowEdit:'1'}"
fragment = "loading"
>Link
</a>
```

- For the program side of the code we can achieve the same behaviour
- Here like the previous case we use the router injected to our ts file
- The router has navigate method which takes a url first and then an object.
- In that object we can specify the queryParams and the fragment

```Typescript
constructor(private route:Router,private currentRoute:ActivatedRoute){}

onClick(){
  this.route.navigate("['servers']",{relativeTo:this.currentRoute,queryParams:{allowEdit:'1'},fragment:'loading'})
}
```

[^Top](#Routing)

---

## **Fetching Query Parameters and Fragment**
Just like in case of fetching the parameters same way we have 2 methods here

- Using observable
- Using Snapshot

- The same procedure is followed expect the synatx is changed

```Typescript
constructor(private route:Router){}

ngOninit(){
  const queryParams = this.route.snapshot.queryParams['queryHere']
  const fragment = this.route.snapshot.fragment
}
```

- The second way using the observable is following

```Typescript
constructor(private route:Router){}

ngOninit(){
  this.route.queryParams.subscribe(
    (params)=>{
      const queryParameters = params
    }
  )
  this.route.fragment.subscribe(
    (params)=>{
      const fragment = params
    }
  )
}
```

[^Top](#Routing)

---

## **The Child Nesting Route**
Now as we know that we might create children for a particular component so in that case we need to provide nesting in routing

- Nesting in routing can simply be achieved by adding a new property children in the approute that we declare in appmodule

- Now since we have given the children to the parents we now will have to provide path as relative
- Also since this is done so whereever we were calling the component using selector there we call <router-outlet>

```Typescript
const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'users', component:UsersComponent,children:[
    {path:':id/:name', component:UserComponent}
  ]},
  {path:'servers',component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]},
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**',redirectTo : '/not-found'}
];
```

And in the html file where these components are called we need to call
```HTML
<router-outlet></router-outlet>
```
[^Top](#Routing)

---

## **Redirecting and Wildcard Routes**
Now we have one issue in this routing situation.
If we enter any random value in the url we will get error.For that we have not handled anything.

Here we use the wildcard method and the redirect property

- First we create a component that will output something in all such cases
- Next in the app modules we give a path to this component inside the approutes for some url.
- Next is the important part. Here we give the path as wildcard *.
- The meaning of this is that all those places that we haven't mentioned in route will come under this.
- Then in place of component we use redirectTo property that wants a url path and we mention the above path there

```Typescript
{path:'not-found', component:PageNotFoundComponent},
  {path:'**',redirectTo : '/not-found'}
```

[^Top](#Routing)

---
## **Using The Query Parameters**
Now we know how to work with parameters. We can add them whereever we require and manipulate the data accordingly
- But there is one slight problem with that
- Once we click on the new link the old queryParameters gets removed
- And once they are removed the actiavtedRoute picks the new route and we does not get the desired result
- So in order to maintain that while navigating in such a case programmatically in the navigate we need to add one property.
- The navigate part will hold queryparamshandling and that has 2 values 
 Merge and Preserve
- With merge it merges the old params value in the new url with the new url params
- With preserve it overides the new url with the params of old url

```TypeScript
this.route.navigate(['/servers','one parameter','second parameter'],{queryParamsHandling:'preserve'})
```

[^Top](#Routing)

---

## **Outsourcing the Route**
Now since we have been adding so many data in same place for routing the issue is it gets complicated

- So to avoid this we add the routing part in a single module
- For that we create the module and add this const appRoutes there
- Now in @NgModule Import part we add the RouterModule.ForRoot part of the code
- Now we add export part also in this
- In export we add the RouterModule
- So now this const is getting exported
- In our main app module file we add the Module in imports part

```Typescript
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'users', component:UsersComponent,children:[
    {path:':id/:name', component:UserComponent}
  ]},
  {path:'servers',component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]},
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**',redirectTo : '/not-found'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

```

[^Top](#Routing)

---
