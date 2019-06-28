
  Vue.use(VueMaterial.default)

      new Vue({
        el: '#app',
        data:{
        	tokens:[
        		{icon:'paypal.png',name:'PayPal',status:true},
        		{icon:'netflix.png',name:'Netflix',status:true},
        		{icon:'spay.png',name:'Samsung Phone',status:false},
        		{icon:'spay.png',name:'Samsung Gear',status:false},
        		{icon:'taxi.png',name:'Hey Taxi !',status:true}]
        ,
        trs:[
            {icon:'walmart.png',name:'Walmart',type:'merchant'},
            {icon:'google.png',name:'Netflix',type:'wallet'},
            {icon:'garmin.png',name:'Garmin Pay',type:'wallet'},
            {icon:'taxi.png',name:'Hey Taxi !',type:'merchant'}]
        }

        
      })