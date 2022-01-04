$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");
    
    const mobileWidth = 750;

    $('.tabs-button').click((e)=>{
        if(window.innerWidth <= mobileWidth){
            $('.tabs-mobile .tabs-button').removeClass('active');
            $('.tabs-mobile .tabs-button').css('background-color', `var(--white)`);
            $(e.target).addClass('active');
            $(e.target).css('background-color', `var(--${$(e.target).data('button')})`);
        }else{
            $('.tabs-button').removeClass('active');
            $('.tabs-desktop.active').removeClass('active');
            $(e.target.hash).find('.tabs-desktop').addClass('active');
            $(e.target.hash).find(`a[href="${e.target.hash}"]`).addClass('active');
        }
        $('.tab-section').removeClass('active');
        $(e.target.hash).addClass('active');
        $('.tabs-div').css('background-color', `var(--${$(e.target).data('color')})`);
    })

    var location = window.location.toString();
    var id;
    var validId = ['dating', 'networking', 'events']
    if(location.includes('#'))
        id = location.substring(location.lastIndexOf('#'))

    if(id && validId.indexOf(id.replace('#', '')) > 0){
        $('.tabs-button').removeClass('active');
        
        if(window.innerWidth <= mobileWidth){
            $('.tabs-mobile .tabs-button').css('background-color', `var(--white)`);
            $('.tabs-mobile .tabs-button[href="'+ id +'"]').addClass('active');
        }else{
            $('.tabs-desktop .tabs-button[href="'+ id +'"]').addClass('active');
        }
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
        });
        
        if(window.innerWidth <= mobileWidth){
            $('.tabs-mobile .tabs-button.active').trigger('click');
        }else{
            $('.tabs-desktop.active .tabs-button.active').trigger('click');
        }
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