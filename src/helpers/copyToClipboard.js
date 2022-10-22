export const copyToClipboard = async element => {
    try {
        await navigator.clipboard.write(element.textContent);
        console.log('success');
    } catch (error) {
        console.log('clipboard api not supported, doing it oldschool way');
        const text = document.createElement('textarea');
        text.innerHTML = element.textContent;
        text.style.position = 'fixed';
        document.body.appendChild(text);
        text.focus();
        text.select();
        const result = document.execCommand('copy');
        document.body.removeChild(text);

        if (!result) throw new Error('unable to copy');
    }
};
