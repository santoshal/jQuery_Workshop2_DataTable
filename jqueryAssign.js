$('document').ready(()=>{
    $.ajax({    
        url: "http://jsonplaceholder.typicode.com/users" 
    }).then((data)=>{
        $.each(data,function(i,datap){
            $("table").append('<tr>'+'<td>'+datap.id+'</td>'+'<td>'+datap.name+'</td>'+'<td>'+datap.email+'</td>'+
            '<td>'+datap.username+'</td>'+'<td>'+datap.phone+'</td>'+'</tr>');
        })
    })
    
        
    
})