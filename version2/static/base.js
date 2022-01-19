$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");
    
    const mobileWidth = 750;
    const validId = ['dating', 'networking', 'events']

    const mobileTabs = {
        'dating':{
            'second':'br-br-0',
            'third':'br-bl-0 br-br-0'
        },
        'networking':{
            'first':'br-bl-0',
            'third':'br-br-0'
        },
        'events':{
            'first':'br-bl-0 br-br-0',
            'second':'br-bl-0'
        }
    }

    $('.tabs-button').click((e)=>{
        e.preventDefault();
        if(window.innerWidth <= mobileWidth){
            $('.tabs-mobile .tabs-button').removeClass('active');
            $('.tabs-mobile .tabs-button').removeClass('br-bl-0');
            $('.tabs-mobile .tabs-button').removeClass('br-br-0');
            $(e.target).addClass('active');
            let currentTab = mobileTabs[e.target.hash.replace('#', '')];
            Object.keys(currentTab).map((key)=>{
                $('.tabs-mobile .tabs-button.'+key).addClass(currentTab[key])
            })
        }else{
            $('.tabs-button').removeClass('active');
            $('.tabs-desktop.active').removeClass('active');
            $(e.target.hash).find('.tabs-desktop').addClass('active');
            $(e.target.hash).find(`a[href="${e.target.hash}"]`).addClass('active');
        }
        $('.tab-section').removeClass('active');
        $(e.target.hash).addClass('active');
        if(e.originalEvent){
            document.querySelector(e.target.hash).scrollIntoView();
        }
        $("body").css("--tab-active-color", `var(--${$(e.target).data('color')})`);
    })

    $('.rightArrow').click((e)=>{
        var target = $(e.target)
        if(!target.data('target')){
            target = target.parent()
        }
        target.closest(".sections.tab-section").find('.tabs-desktop').find(`a[href="#${target.data('target')}"]`).trigger('click')
    })

    validId.forEach(id => {
        $('.tab-pointers').append(
            $('<span />', {
                "data-target":"#"+id,
                class:"tab-point"
            })
        )
        var tabPoint = $("#"+id).find('.tab-pointers').find('span[data-target="#'+id+'"]')
        tabPoint.addClass('active')
    });

    $('.tab-point').click((e)=>{
        var target = $(e.target)
        target.closest(".sections.tab-section").find('.tabs-desktop').find(`a[href="${target.data('target')}"]`).trigger('click')
    })


    var location = window.location.toString();
    var id;
    if(location.includes('#'))
        id = location.substring(location.lastIndexOf('#'))

    if(id && validId.indexOf(id.replace('#', '')) > 0){
        $('.tabs-button').removeClass('active');
        
        if(window.innerWidth <= mobileWidth){
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
            
        var container = document.querySelector('.tabs-div')
        

        window.addEventListener('resize', function () {
            if(window.innerWidth <= mobileWidth){
                windowResize()
            }else{
                window.removeEventListener('scroll', arguments.callee)
            }
            
            if(window.innerWidth <= mobileWidth){
                $('.tabs-mobile .tabs-button.active').trigger('click');
            }else{
                $('.tabs-desktop.active .tabs-button.active').trigger('click');
            }
        })
        function windowScroll() {
            var offset = container.getBoundingClientRect();
            distance = offset.top - 25;
    
            if(distance < 75){
                $('.header_div').css('position', 'absolute')
            }else{
                $('.header_div').css('position', 'fixed')
            }
            
            if(distance < 0){
                $('.tabs-mobile').addClass('fixed')
            }else{
                $('.tabs-mobile').removeClass('fixed')
            }
        }
        function windowResize() {
            window.addEventListener('scroll', windowScroll)
            
        }
        if(window.innerWidth <= mobileWidth){
            windowResize()
        }

        $('.email').submit((e)=>{
            console.log(e);
            e.preventDefault();
            var email = $(e.target).children('input').val();
            console.log(email);
            if(email && isEmail(email)){
                $.post(
                    "https://submit-form.com/M7XywaHQ",
                    {
                        email,
                    },
                    null,
                    "json" // dataType must be set to json
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.error(response);
                });
                document.querySelector("#"+$(e.target).data("target")).scrollIntoView()
                $('#email').val(email)
                return true
            }
            else{
                e.preventDefault();
                // e.stopImmediatePropagation();
                return false;
            }
        });
        
        if(window.innerWidth <= mobileWidth){
            $('.tabs-mobile .tabs-button.active').trigger('click');
        }else{
            $('.tabs-desktop.active .tabs-button.active').trigger('click');
        }

        $('#get_access').submit((e)=>{
            e.preventDefault();
            var data = $(e.target).serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});
            $.post(
                "https://submit-form.com/LY16md6k",
                data,
                null,
                "json" // dataType must be set to json
            )
            .then(function (response) {
                console.log(response);
                $('#submit-btn').val('Submitted!');
                $('#submit-btn').prop('disabled', true)
            })
            .catch(function (response) {
                console.error(response);
            });
        })
        // $('.modal-trigger').click((e)=>{
        //     e.preventDefault();
        //     $('#formModal').css('display', 'flex')
        // })

        // $('.close').click((e)=>{
        //     $('#formModal').css('display', 'none')
        // })

        // $('#formModal').click((e)=>{
        //     $('#formModal').css('display', 'none')
        // })
        // $('.modal-content').click((e)=>{
        //     e.stopPropagation();
        //     e.preventDefault();
        // })

    }, 1000);
});