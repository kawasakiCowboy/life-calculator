const Feeling = {
    SadSadSadSad: 0.5,
    SadSadSad: 0.6,
    SadSad: 0.7,
    Sad: 0.8,
    NotSoSad: 0.9,
    Neutral: 1,
    NotSoHappy: 1.1,
    Happy: 1.2,
    HappyHappy: 1.3,
    HappyHappyHappy: 1.4,
    HappyHappyHappyHappy: 1.5
};

const feelingColorMap = {
    [Feeling.SadSadSadSad]: ["#121929", "#3b4154", "#237d7d"],
    [Feeling.SadSadSad]: ["#1f2b45", "#505873", "#2c9999"],
    [Feeling.SadSad]: ["#2a3a5c", "#646d8f", "#35b8b8"],
    [Feeling.Sad]: ["#344770", "#7984ab", "#3bd4d4"],
    [Feeling.NotSoSad]: ["#394e7a", "#8e9ac7", "#4ee"],
    [Feeling.Neutral]: ["#22d", "#c8f8ff", "#6d2"],
    [Feeling.NotSoHappy]: ["#ff33f8", "#00ffbb", "#cffc05"],
    [Feeling.Happy]: ["#70ff57", "#00d0ff", "#9263ff"],
    [Feeling.HappyHappy]: ["#3bffff", "#3fbd00", "#e30000"],
    [Feeling.HappyHappyHappy]: ["#7105e6", "#00ff62", "#ff3c00"],
    [Feeling.HappyHappyHappyHappy]: ["#39f", "#f4e54d", "#fa3"],
};

const feelingLabelMap = {
    [Feeling.SadSadSadSad]: "World minimum record",
    [Feeling.SadSadSad]: "Really low",
    [Feeling.SadSad]: "Significantly less than average",
    [Feeling.Sad]: "Less than average",
    [Feeling.NotSoSad]: "Slightly less than average",
    [Feeling.Neutral]: "Neutral",
    [Feeling.NotSoHappy]: "Slightly more than average",
    [Feeling.Happy]: "More than average",
    [Feeling.HappyHappy]: "Noticeably more than average",
    [Feeling.HappyHappyHappy]: "Really high",
    [Feeling.HappyHappyHappyHappy]: "World record",
};

function createApp() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    
    const content = document.createElement('div');
    content.className = 'content';
    
    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'How are you feeling today?';
    
    const label = document.createElement('h2');
    label.className = 'label';

    const buttonNext = document.createElement('button');
    buttonNext.className = 'button-next';
    buttonNext.textContent = 'Proceed';

    const buttonBack = document.createElement('button');
    buttonBack.className = 'button-back';
    buttonBack.textContent = 'Previous question';
    
    const range = document.createElement('input');
    range.type = 'range';
    range.className = 'range';
    range.min = '0.5';
    range.max = '1.5';
    range.step = '0.1';
    range.value = Feeling.Neutral;

    // Initial setup
    let currentFeeling = Feeling.Neutral;
    updateColors(currentFeeling);
    label.textContent = feelingLabelMap[currentFeeling];

    range.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        currentFeeling = value;
        updateColors(value);
        label.textContent = feelingLabelMap[value];
    });

    function updateColors(feeling) {
        const [a, b, c] = feelingColorMap[feeling];
        wrapper.style.setProperty('--color-a', a);
        wrapper.style.setProperty('--color-b', b);
        wrapper.style.setProperty('--color-c', c);
    }

    content.appendChild(title);
    content.appendChild(label);
    content.appendChild(range);
    content.appendChild(buttonNext);
    content.appendChild(buttonBack);
    wrapper.appendChild(content);

    const main = document.createElement('main');
    main.appendChild(wrapper);
    
    document.body.appendChild(main);
}

document.addEventListener('DOMContentLoaded', createApp);