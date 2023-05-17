# MiniProject3
Url: https://sergrojas29.github.io/Password-Generator/

# table of content

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


# User Story

    AS AN employee with access to sensitive data
    I WANT to randomly generate a password that meets certain criteria
    SO THAT I can create a strong password that provides greater security


# Acceptance Criteria
    GIVEN I need a new, secure password
    WHEN I click the button to generate a password
    THEN I am presented with a series of prompts for password criteria
    WHEN prompted for password criteria
    THEN I select which criteria to include in the password
    WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters
    WHEN asked for character types to include in the password
    THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected
    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria
    WHEN the password is generated
    THEN the password is either displayed in an alert or written to the page

# Usage
The goal of this challenge to create a password generator while also allowing user input to change the generatored password.

The slider translate the vaule to the function that determins which password to generate and the lenght.

There is also a tooltip on the security level while hovering over it to describe the levels of security.

![tooltip](./assets/images/toottip.png)

Also there will be an error if the user does not input a Secure level.

![errormessage](./assets/images/errormessage.png)



# Contributing

Starter code: https://github.com/coding-boot-camp/friendly-parakeet
Contributer: @Xandromus


# License

MIT License

Copyright (c) [2023]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
MIT
