flowSVG.config({
    labelYes: 'True',
    labelNo: 'false',
    labelWidth: 40,
    labelNudgeRight: 10,
    labelNudgeBottom: 10,
    // The following are self-explanatory
    connectorLength: 100,
    connectorStrokeWidth: 3,
    arrowColour: 'lightgrey',
    decisionFill: 'firebrick',
    processFill: 'navajowhite',
    finishFill: 'seagreen',
    defaultFontSize: '14'
});
    flowSVG.draw(SVG('drawing').size(900, 1100));

// Then construct an array of shape objects.
flowSVG.shapes([
{   
    label: "isSignedIn",
    type:"decision",
    text:["Is user signed in?"],
    yes:"userSignedIn",
    no:"userNotSignedIn"
},
{
    label:"userSignedIn",
    type:"process",
    text:["Allow user to book,","and add Welcome, <user>"],
    next:"bookNow"
},
{
    label:"userNotSignedIn",
    type:"process",
    text:["Redirect user to","sign up on book now", "click"],
    next: "signIn"
},
{
    label:"signIn",
    type:"process",
    text:["restart"]
},
{
    label:"bookNow",
    type:"process",
    text:["Let user pick","rooms"]
}]);

