# LayoutLoadingDispatcher
Layout loading dispatcher offers a provider and a hook to easy manage the layout screen in a website using React.

## Demo:

You'll find a demo in the "./demo" directory. You can work with by cloning it or you can try it in codesandbox in this link:

[link to codesandbox demo!](https://codesandbox.io/s/lld-demo-1-oc4qn)

## Get started
You can get started by clonning the repository or executing:
 
    npm i @luxoimum/layout-loading-dispatcher
    
    yarn add @luxoimum/layout-loading-dispatcher
    
## How to use it:

Import and use the component "LayoutProvider" in the root of your app by this way:
    
    import { LayoutProvider } from '@luxoimum/layout-loading-dispatcher'
    
    function MyLayoutManager () {
        return <LayoutProvider state={{app: false}}>
            //YourApp
        </LayoutProvider>
    }
    
Dont forget to set "state={{app: false}}" to trigger out the loading screen and show up your App when its ready to use. You can change the state settings by adding more constraints, but you have to remember change all of this to true value when you went to show up your App.

Some examples of usefull initial states:

    state={{userData: false, content: false}}

    state={{header: false, menu: false, app: false}}
    
You can change states to true when they're ready to use by importing "useLayout" hook and using "setLayoutState" function by this way:

    import { useLayout } from '@luxoimum/layout-loading-dispatcher'

    // suppose an state = {{dataFetching: false}} in our LayoutProvider
    function App () {
        const { setLayoutState } = useLayout()

        useEffect(() => {
            setLayoutState('dataFetching', true)
        }, [setLayoutState])

        return //some html/react-components
    }

Notice that "setLayoutState('dataFetching', true)" only will show up the app when the state is "state = {{dataFetching: false}}". Complex inital states require all elements setted to true to hide loading screen and show up your App. In addition, "setLayoutState" can set to true just one state attribute at time, so if you have 2 or more state attributes you must execute multiple "setLayoutState" for each state attribute.

This functionality gives you powerful control of the loading screens regardless of the depth of the component that needs a loading screen before being showed.

## Another props:

### customComponent: 

You can add your own loading icon, text or React component to show at the screen meanwhile your web is loading. 

