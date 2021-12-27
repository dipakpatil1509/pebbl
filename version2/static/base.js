$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
    $('.tabs-button').click((e)=>{
        $('.tabs-button').removeClass('active');
        $('.tabs-button').css('background-color', `var(--white)`)
        $('.tab-section').removeClass('active');
        $(e.target).addClass('active');
        $(e.target.hash).addClass('active');
        $('.tabs-div').css('background-color', `var(--${$(e.target).data('color')})`)
        $(e.target).css('background-color', `var(--${$(e.target).data('color')})`)
    })

    var location = window.location.toString();
    var id;
    var validId = ['dating', 'networking', 'events']
    if(location.includes('#'))
        id = location.substring(location.lastIndexOf('#'))

    if(id && validId.indexOf(id.replace('#', '')) > 0){
        $('.tabs-button').removeClass('active');
        $('.tabs-button').css('background-color', `var(--white)`)
        $('.tabs-button[href="'+ id +'"]').addClass('active')
    }

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

        

    setTimeout(() => {
            
        $('.email').click((e)=>{
            var email = $(e.target).parent().children('input').val();
            if(email && isEmail(email)){
                $('#email').val(email)
                return true
            }
            else{
                e.stopPropagation();
                e.stopImmediatePropagation();
                return
            }
        })
        $('.tabs-button.active').trigger('click')
        $('.modal-trigger').click((e)=>{
            e.preventDefault();
            $('#formModal').css('display', 'flex')
        })

        $('.close').click((e)=>{
            $('#formModal').css('display', 'none')
        })

        $('#formModal').click((e)=>{
            $('#formModal').css('display', 'none')
        })
        $('.modal-content').click((e)=>{
            e.stopPropagation();
            e.preventDefault();
        })

    }, 1000);
});