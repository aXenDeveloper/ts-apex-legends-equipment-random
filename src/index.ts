import './styles/style.scss';
import 'tippy.js/dist/tippy.css';
import tooltip from './components/tooltip/tooltip';
import submitForm from './components/submitForm';
export const getSettings = document.querySelector('.settings');

submitForm();
tooltip();
