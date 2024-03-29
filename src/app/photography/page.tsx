import { Metadata } from 'next';
import PhotographyContent from './components/photography';

export const metadata: Metadata = {
	title: 'Joe Owen | Photography',
};

export default function Photography() {
	return <PhotographyContent />;
}
