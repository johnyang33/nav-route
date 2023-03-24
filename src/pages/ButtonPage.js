import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() { 

    const handleClick = () =>
    {
        //console.log('Click!!');
    }

    return (
        <div>
            <div>
                <Button primary rounded outline onClick={handleClick} className="mb-5">
                    <GoBell />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoCloudDownload />
                    See Deal
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    Hide Ads
                </Button>
            </div>
            <div>
                <Button warning>Something</Button>
            </div>
            <div>
                <Button danger rounded outline>Nothing</Button>
            </div>
        </div>
    )
}

export default ButtonPage;

