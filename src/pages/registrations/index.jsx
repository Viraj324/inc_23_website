import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import JudgeForm from './judge.register';
import EventsForm from './events.register';
import AdminForm from './admin.register';
// const JudgeForm = lazy(() => import('./judge.register'));
// const EventsForm = lazy(() => import('./events.register'));
// const AdminForm = lazy(() => import('./admin.register'));

function RegistrationsForms() {
    return (
        <div className=''>
            <Routes>
                <Route path='/judge' element={<JudgeForm />} />
                <Route path='/events/:eventName' element={<EventsForm />} />
                <Route path='/admin' element={<AdminForm />} />
            </Routes>
        </div>
    );
}

export default RegistrationsForms;