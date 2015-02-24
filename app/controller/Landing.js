Ext.define('ttapp.controller.Landing', {
    extend: 'Ext.app.Controller',
    requires: ['ttapp.store.Profile'],
    //, 'Ext.device.Push', 'Ext.device.Device'
    config: {
        refs: {
            btnBegin: 'button[cls~=clsBegin]',
        },
        control: {
            'btnBegin': {
                tap: 'onUserAction'
            }
        }
    },
    onUserAction: function(){
        

        if ( Ext.getStore('profilestore').isUserVerified() === true){
            
            if (Ext.os.deviceType == 'Phone'){
                ttapp.util.Push.takeUserPermissionForPushNotify();
            }
            Ext.Viewport.setActiveItem('trinket','slide');
        }
        else{
            Ext.Viewport.setActiveItem('authenticate','slide');   
        }
    }
});
