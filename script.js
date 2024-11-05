$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front-end Developer", "Back-End Developer","Blogger", "Designer","Cyber Professional"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front-end Developper","Back-End Developer", "Blogger", "Designer","Cyber Professional"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
const responses = {
    "hi": "Hello! How can I assist you?",
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "is there a discount friday": "Yes, we have a special discount this Friday!",
    "goodbye": "Goodbye! Have a great day!",
    "default": "I'm here to answer any questions you may have."
};

// Toggle chat display
function toggleChat() {
    const chatCard = document.getElementById("chatCard");
    chatCard.classList.toggle("hidden");
}

// Toggle emoji picker display
function toggleEmojiPicker() {
    const emojiPicker = document.getElementById("emojiPicker");
    emojiPicker.style.display = emojiPicker.style.display === "flex" ? "none" : "flex";
}

// Hide emoji picker when the input field is focused
function hideEmojiPicker() {
    const emojiPicker = document.getElementById("emojiPicker");
    emojiPicker.style.display = "none"; // Hide the emoji picker when focus is in input field
}

// Add emoji to input
function addEmoji(emoji) {
    const userInput = document.getElementById("userInput");
    userInput.value += emoji;
}

// Handle Enter key to send message
function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default Enter action
        sendMessage();
    }
}

// Add message to chat
function addMessage(sender, messageText) {
    const chatContent = document.getElementById("chatContent");
    const message = document.createElement("div");
    message.classList.add("message", sender);

    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    // Use human icon for user and bot icon for the bot
    const img = document.createElement("img");
    if (sender === "user") {
        img.src = "https://via.placeholder.com/30"  // Replace with the path to the human icon (user's icon)
        img.alt = "";
    } else {
        img.src = "./robot-w.svg"; // Replace with the path to the robot icon if needed
        img.alt = "Bot Icon";
    }
    
    userDiv.appendChild(img);

    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content");
    messageContent.textContent = messageText;

    message.appendChild(userDiv);
    message.appendChild(messageContent);
    chatContent.appendChild(message);
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Send user message and get AI response
function sendMessage() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addMessage("user", userMessage); // Add user message
        userInput.value = "";

        const response = responses[userMessage.toLowerCase()] || responses["default"];
        
        setTimeout(() => {
            addMessage("bot", response); // Add bot response after a delay
        }, 1000);
    }
}

