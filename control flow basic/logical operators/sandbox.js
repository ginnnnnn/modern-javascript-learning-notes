//logical operators,or || ,and &&

const password = '12300@'

if (password.length >= 12 && password.includes('@')) {
    console.log('that is a mighty strong password');
} else if (password.length >= 10 && password.includes('@')) {
    console.log('that is a fine password');
} else if (password.length > 7 || password.includes('@') && password.length > 5) {
    console.log('better change your password'); //inculdes && length >5 is one condition
} else {
    console.log('that is a no no password');
}
//