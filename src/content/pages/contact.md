---
title: Get in touch
seo:
  title: Contact
  description: Get in touch through email or social media! Let me know how I can help.
---

Thank you for reaching out! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:

_Email:_
Feel free to drop me an email at <span id="email-link">[enable JavaScript to view email]</span>, and I'll do my best to respond as soon as possible.

_Social Media:_
Connect with me on social media as well. Find me on [LinkedIn](https://linkedin.com/in/chia-sin-liew).


<script is:inline>
  function revealEmail() {
    const user = "chiasin.liew";
    const domain = "unl.edu";
    const email = user + "@" + domain;
    const el = document.getElementById("email-link");
    if (el) {
      el.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
    }
  }
  revealEmail();
  document.addEventListener("astro:page-load", revealEmail);
</script>