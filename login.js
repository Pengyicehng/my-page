document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 检查账号密码是否正确
        if (username === "2004062820040305" && password === "pycwy1314zai17") {
            // 导航到第二个页面
            window.location.href = "picture.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
