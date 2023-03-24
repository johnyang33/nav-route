import Accordion from '../components/Accordion';

function AccordionPage() { 
    const items = [
        {
            id: 'ji3o',
            label: 'Can i use react on any project?',
            content: 'You can use React on any project that you want. '
        },
        {
            id: 'fj3',
            label: 'Can i use JavaScript on any project?',
            content: 'You can use React on any project that you want. '
        },
        {
            id: '3l2l',
            label: 'Can i use CSS on any project?',
            content: 'You can use React on any project that you want. '
        },
    ];

    return <Accordion items={items} />;

}
export default AccordionPage;

