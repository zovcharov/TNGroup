import React, { useState } from 'react';

import TngInput from './../../TngInput/TngInput';
import DatePicker from '../../DatePicker/DatePicker';
import TngUserSelect from '../../TngUserSelect/TngUserSelect';
import MilestonesInput from './components/MilestonesInput';
import MilestoneModal from './../MilestoneModal/MilestoneModal';

import { saveProject } from './../../../redux/fetchers';

import './CreateProjectModalContent.scss';
import DefaultButton from "../../Buttons/DefaultButton/DefaultButton";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";

const CreateProjectModalContent = (props) => {
    const [isMilestoneModalOpen, toggleMilestoneModal] = useState(false);
    const [milestones, updateMilestones] = useState([]);
    const [projectName, changeProjectName] = useState('');

    const onAddMilestone = () => toggleMilestoneModal(true);
    const onMilestoneModalClose = () => toggleMilestoneModal(false);

    const onCreateMilestone = (milestoneName, milestoneDate) => {
        const newMilestones = milestones.slice();
        newMilestones.push({
            name: milestoneName,
            date: milestoneDate,
        });
        updateMilestones(newMilestones);
    };

    const onSaveDraft = () => {
        saveProject({
            PassportProject: {
                Name: projectName,
            }
        })
    };

    return (
        <div className="project-modal">
            <div className="project-modal__content">
                <div className="project-name content__grid-item">
                    <div className="project-modal__label">Название проекта:</div>
                    <div className="project-name__input">
                        <TngInput value={projectName} changeValue={changeProjectName} />
                    </div>
                </div>
                <div className="project-initiator content__grid-item">
                    <div className="project-modal__label">Инициатор:</div>
                    <div className="project-initiator__input">
                        <TngUserSelect />
                    </div>
                </div>
                <div className="project-curator content__grid-item">
                    <div className="project-modal__label">Куратор:</div>
                    <div className="project-curator__input">
                        <TngUserSelect />
                    </div>
                </div>
                <div className="project-customer content__grid-item">
                    <div className="project-modal__label">Заказчик:</div>
                    <div className="project-customer__input">
                        <TngUserSelect />
                    </div>
                </div>
                <div className="project-goal content__grid-item">
                    <div className="project-modal__label">Цель проекта:</div>
                    <div className="project-goal__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-customer-contact content__grid-item">
                    <div className="project-modal__label">Контактное лицо заказчика:</div>
                    <div className="project-customer-contact__input">
                        <TngUserSelect />
                    </div>
                </div>
                <div className="project-controller content__grid-item">
                    <div className="project-modal__label">Контролёр проекта:</div>
                    <div className="project-controller__input">
                        <TngUserSelect />
                    </div>
                </div>
                <div className="project-manager content__grid-item">
                    <div className="project-modal__label">Руководитель проекта:</div>
                    <div className="project-manager__input">
                        <TngUserSelect />
                    </div>
                </div>
                <div className="project-description content__grid-item">
                    <div className="project-modal__label">Описание проекта:</div>
                    <div className="project-description__input">
                        <TngInput multiline/>
                    </div>
                </div>
                <div className="project-result content__grid-item">
                    <div className="project-modal__label">Ожидаемый результат:</div>
                    <div className="project-result__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-executors content__grid-item">
                    <div className="project-modal__label">Исполнители:</div>
                    <div className="project-executors__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-product content__grid-item">
                    <div className="project-modal__label">Ожидаемый продукт:</div>
                    <div className="project-product__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-cost content__grid-item">
                    <div className="project-modal__label">Стоимость проекта:</div>
                    <div className="project-cost__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-economic-effect content__grid-item">
                    <div className="project-modal__label">Экономической эффект:</div>
                    <div className="project-economic-effect__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-meeting-place content__grid-item">
                    <div className="project-modal__label">Место проведения совещания:</div>
                    <div className="project-meeting-place__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-meeting-periodicity content__grid-item">
                    <div className="project-modal__label">Периодичность совещаний:</div>
                    <div className="project-meeting-periodicity__input">
                        <TngInput />
                    </div>
                </div>
                <div className="project-end-date content__grid-item">
                    <div className="project-modal__label">Дата окончания проекта:</div>
                    <div className="project-end-date__input">
                        <DatePicker />
                    </div>
                </div>
                <div className="project-milestones content__grid-item">
                    <div className="project-modal__label">Вехи проета:</div>
                    <div className="project-milestones__input">
                        <MilestonesInput onAddMilestone={onAddMilestone} milestones={milestones}/>
                    </div>
                    <MilestoneModal
                        isOpen={isMilestoneModalOpen}
                        onClose={onMilestoneModalClose}
                        onSubmit={onCreateMilestone}
                    />
                </div>
            </div>
            <div className="project-modal__footer">
                <DefaultButton className="footer__button button__add-files">
                    <span className="button__content">
                        Прикрепить файлы
                    </span>
                </DefaultButton>
                <DefaultButton className="footer__button button__save-draft" onClick={onSaveDraft}>
                    <span className="button__content">
                        Сохранить черновик
                    </span>
                </DefaultButton>
                <SubmitButton className="footer__button">
                    <span className="button__content">
                        Отправить на согласование
                    </span>
                </SubmitButton>
            </div>
        </div>
    )
};

export default CreateProjectModalContent;
