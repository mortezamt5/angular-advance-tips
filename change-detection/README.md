
####  Angular Change Detection

  Change detection is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
#### Angular use of change detection for 3 reasons : 
``` 
1- Whenever Events like click , submit and etc happend
2- Whenever asynchronous functions like setInterfal , setTimeout and etc happend
3- Whenever Api response invoked
```
#### Default Strategy
```
Angular always runs the change detection from top to bottom in the component tree
even event get fired in child component angular always run change detecorator from root component
```
#### OnPush Strategy
for change the strategy in component add this line in component 
```
@Component({
  ...
  changeDetection: ChangeDetectionStrategy.OnPush
  ...
})
```
To set the change detection strategy to "OnPush" for all components in an Angular application, you can follow these steps:

Update Angular Compiler Options: Open the tsconfig.json file in the root of your Angular project. Locate the `angularCompilerOptions` section and add or modify the `defaultChangeDetection` property to set it to "OnPush". It should look like this:
```
{
  "compilerOptions": {
    "angularCompilerOptions": {
      "defaultChangeDetection": "OnPush"
    }
  }
}

```
if you want to set trigger of chnage detection manualy 
```
constructor(private cd: ChangeDetectorRef) {}

  ngDoCheck(): void {
    this.cd.detectChanges();
  }
```

 