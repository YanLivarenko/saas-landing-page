document.addEventListener('DOMContentLoaded', () => {
    let subscriptions = document.querySelectorAll('.subscription__head_buttons_button')
    let subscriptionYearly = subscriptions[0]
    let subscriptionMonthly = subscriptions[1]
    subscriptionYearly.addEventListener('click', () => {
        if(!subscriptionYearly.classList.contains('subscription__head_buttons_button_active')){
            subscriptionMonthly.classList.remove('subscription__head_buttons_button_active')
            subscriptionYearly.classList.add('subscription__head_buttons_button_active')
        }
    })
    subscriptionMonthly.addEventListener('click', () => {
        if(!subscriptionMonthly.classList.contains('subscription__head_buttons_button_active')){
            subscriptionYearly.classList.remove('subscription__head_buttons_button_active')
            subscriptionMonthly.classList.add('subscription__head_buttons_button_active')
            
        }
    })
    let cards = document.querySelectorAll('.subscription__cards_item')
    cards.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cards.forEach(el => {
                el.classList.remove('subscription__cards_item_active')
                el.children[0].classList.remove('subscription__cards_item_title_active')
                el.children[1].classList.remove('subscription__cards_item_price_active')
                el.children[2].classList.remove('subscription__cards_item_info_active')
                el.children[3].classList.remove('subscription__cards_item_button_active')
            });
            element.classList.add('subscription__cards_item_active')
            element.children[0].classList.add('subscription__cards_item_title_active')
            element.children[1].classList.add('subscription__cards_item_price_active')
            element.children[2].classList.add('subscription__cards_item_info_active')
            element.children[3].classList.add('subscription__cards_item_button_active')
        })
        element.addEventListener('mouseleave', () => {
            element.classList.remove('subscription__cards_item_active')
            element.children[0].classList.remove('subscription__cards_item_title_active')
            element.children[1].classList.remove('subscription__cards_item_price_active')
            element.children[2].classList.remove('subscription__cards_item_info_active')
            element.children[3].classList.remove('subscription__cards_item_button_active')

            cards[1].classList.add('subscription__cards_item_active')
            cards[1].children[0].classList.add('subscription__cards_item_title_active')
            cards[1].children[1].classList.add('subscription__cards_item_price_active')
            cards[1].children[2].classList.add('subscription__cards_item_info_active')
            cards[1].children[3].classList.add('subscription__cards_item_button_active')
        })       
    });


    
});