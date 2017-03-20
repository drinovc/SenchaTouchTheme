// Ext.define('App.override.field.Input', {
//     override: 'Ext.field.Input',
    
//     updateReadOnly: function(readOnly) {
        
//         this[readOnly ? 'addCls' : 'removeCls']('my-readonly');
//     },
// });

Ext.define('rk.ulti.PositionMap',{
    override:'Ext.util.PositionMap',
    config:{
        minimumHeight:0
    }
});