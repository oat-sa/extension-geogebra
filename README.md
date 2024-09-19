# Extension for TAO Platform
This will install GeoGebra application as a PCI (portable custom interaction)

You will be able to create items based on GeoGebra and use the huge GeoGebra library

The GeoGebra PCI respects exactly the IMS format (1EdTech)

# Installation :
Go to the root of your TAO application.

Launch a composer command : composer require janfix/extension-geogebra:v1.2.1

Once the download is done, go to your TAO application (you need the admin rights) go to the extension manager and activate de GeoGebra extension.

# More info for this version
If you want more details go to : https://www.geogebra.org/m/cwbstkcr

# This last update...
Version 1.2.1 fixed 2 problems : 
1. The answering system will now catch values of variables defined in GeoGebra to encode the answer. Ask GeoGebra for more info on this point.
2. In case of a non linear test, the test-taker can retreive his own work while browsing throught the items. The state of GeoGebra is now preserved. 
