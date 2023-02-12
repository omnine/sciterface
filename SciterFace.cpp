// HelloWorld.cpp : Defines the entry point for the application.
//

#include "stdafx.h"
//#include "HelloWorld.h"

#include "sciter-x-window.hpp"
#include <thread>

class frame : public sciter::window {
    public:
	    frame() : window(SW_TITLEBAR | SW_RESIZEABLE | SW_CONTROLS | SW_MAIN | SW_ENABLE_DEBUG) {}

        std::string      stringSum(const std::string& a, const std::string& b) { return a + "+" + b; }

        bool checkConnectionStatus(sciter::value params) {
            std::thread([=]() {
                sciter::value doneCb = params["done"];
 //               sciter::value progressCb = params["progress"];
                // simulate long running task
                for (int n = 0; n < 50; ++n) {
                    std::this_thread::sleep_for(std::chrono::milliseconds(100));
 //                   if (!progressCb.is_undefined()) progressCb.call(n);
                }
                if (!doneCb.is_undefined()) doneCb.call(100);

             }).detach();

            return true;
        }



    SOM_PASSPORT_BEGIN_EX(assetInterface, frame)
        SOM_FUNCS(
            SOM_FUNC(stringSum),
            SOM_FUNC(checkConnectionStatus),
            /*
             SOM_FUNC(integerSum),
            SOM_FUNC(bytesSum),
            SOM_FUNC(vectorIntegerMul),
            SOM_FUNC(errorGeneration),
            SOM_FUNC(makeNativeObject),
            SOM_FUNC(startNativeThread),
            SOM_FUNC(startNativeThreadWithObject),
            SOM_FUNC(nativeAsyncFunction),
            SOM_FUNC(nativeFunctionsA),
            SOM_FUNC(nativeFunctionsB),           
            */

            )
//        SOM_PROPS(
 //           SOM_RO_VIRTUAL_PROP(windowHandle, get_windowHandle)
 //       )
        SOM_PASSPORT_END
};

#include "resources.cpp"

int uimain(std::function<int()> run) {
    // Enable these features, to be available from script 
    SciterSetOption(NULL, SCITER_SET_SCRIPT_RUNTIME_FEATURES,
        ALLOW_FILE_IO |
        ALLOW_SOCKET_IO |
        ALLOW_EVAL |
        ALLOW_SYSINFO);
    SciterSetOption(NULL, SCITER_SET_DEBUG_MODE, TRUE);

	//sciter::debug_output_console console; - uncomment it if you will need console window

	sciter::archive::instance().open(aux::elements_of(resources)); // bind resources[] (defined in "resources.cpp") with the archive

	frame* pwin = new frame();

	// note: this:://app URL is dedicated to the sciter::archive content associated with the application
	pwin->load(WSTR("this://app/main.htm"));

	pwin->expand();

	return run();
}
