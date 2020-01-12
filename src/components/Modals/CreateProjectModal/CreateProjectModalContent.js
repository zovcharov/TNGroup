/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */

import React, { useState, useEffect } from 'react';

import TngInput from '../../TngInput/TngInput';
import DatePicker from '../../DatePicker/DatePicker';
import TngUserSelect from '../../TngUserSelect/TngUserSelect';
import MilestonesInput from '../components/Milestones/MilestonesInput';
import MilestoneModal from '../MilestoneModal/MilestoneModal';

import { saveProject, editProject } from '../../../redux/fetchers';
import { ROLES_IN_PROJECT, prepareDataToSave } from './CreateProject.preparer';

import './CreateProjectModalContent.scss';
import DefaultButton from '../../Buttons/DefaultButton/DefaultButton';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';

const findParticipantByRole = (participents, role) => {
    const participant = participents.find((participant) => participant.ProjectRole === ROLES_IN_PROJECT[role]);
    return participant ? [participant] : [];
};

const findParticipantsByRole = (participents, role) => participents.filter((participant) => participant.ProjectRole === ROLES_IN_PROJECT[role]);

const CreateProjectModalContent = ({
    onClose, setLoading, isEdit, ...props
}) => {
    const [isMilestoneModalOpen, toggleMilestoneModal] = useState(false);

    /* All Project Data for creation */
    const [milestones, updateMilestones] = useState([]);
    const [projectName, changeProjectName] = useState('');
    const [projectDescription, changeProjectDescription] = useState('');
    const [projectGoal, changeProjectGoal] = useState('');
    const [projectResult, changeProjectResult] = useState('');
    const [projectProduct, changeProjectProduct] = useState('');
    const [projectCost, changeProjectCost] = useState('');
    const [economicEffect, changeEconomicEffect] = useState('');
    const [meetingPlace, changeMeetingPlace] = useState('');
    const [meetingPeriodicity, changeMeetingPeriodicity] = useState('');
    const [projectEndDate, changeProjectEndDate] = useState('');
    const [initiator, changeInitiator] = useState([]);
    const [curator, changeCurator] = useState([]);
    const [customer, changeCustomer] = useState([]);
    const [customerContact, changeCustomerContact] = useState([]);
    const [controller, changeController] = useState([]);
    const [manager, changeManager] = useState([]);
    const [executors, changeExecutors] = useState([]);

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

    const getProjectData = (isDraft) => ({
        participants: {
            initiator,
            curator,
            customer,
            customerContact,
            controller,
            manager,
            executors,
        },
        projectName,
        projectDescription,
        projectGoal,
        projectResult,
        projectProduct,
        projectEndDate,
        meetingPlace,
        meetingPeriodicity,
        milestones,
        projectCost: Number(projectCost),
        economicEffect: Number(economicEffect),
        passportId: props.Id,
        projectId: props.projectId,
        isDraft: isDraft,
        needAgreement: !isDraft,
    });

    const onSaveDraft = () => {
        // eslint-disable-next-line no-unused-expressions
        setLoading && setLoading(true);

        if (isEdit) {
            editProject(prepareDataToSave(getProjectData(true)), props.projectId)
                .then(() => {
                    onClose();
                })
                .finally(() => {
                    // eslint-disable-next-line no-unused-expressions
                    setLoading && setLoading(false);
                });
        } else {
            saveProject(prepareDataToSave(getProjectData(true)))
                .then(() => {
                    onClose();
                })
                .finally(() => {
                    // eslint-disable-next-line no-unused-expressions
                    setLoading && setLoading(false);
                });
        }
    };

    const onSendToAgreement = () => {
        // eslint-disable-next-line no-unused-expressions
        setLoading && setLoading(true);

        if (isEdit) {
            editProject(prepareDataToSave(getProjectData(false)), props.projectId)
                .then(() => {
                    onClose();
                })
                .finally(() => {
                    // eslint-disable-next-line no-unused-expressions
                    setLoading && setLoading(false);
                });
        } else {
            saveProject(prepareDataToSave(getProjectData(false)))
                .then(() => {
                    onClose();
                })
                .finally(() => {
                    // eslint-disable-next-line no-unused-expressions
                    setLoading && setLoading(false);
                });
        }
    };

    useEffect(() => {
        if (isEdit) {
            changeProjectName(props.Name);
            changeProjectDescription(props.Description);
            changeProjectGoal(props.Objective);
            changeProjectResult(props.ExpectedResult);
            changeProjectProduct(props.ExpectedProduct);
            changeProjectCost(props.EstimatedСost);
            changeEconomicEffect(props.ApproximateEconomicEffect);
            changeMeetingPlace(props.MeetingLocation);
            changeMeetingPeriodicity(props.MeetingPeriodic);
            changeProjectEndDate(new Date(props.DateEnd));
            changeInitiator(findParticipantByRole(props.Participants, 'Initiator'));
            changeCurator(findParticipantByRole(props.Participants, 'Curator'));
            changeCustomer(findParticipantByRole(props.Participants, 'Customer'));
            changeCustomerContact(findParticipantByRole(props.Participants, 'Unknown'));
            changeController(findParticipantByRole(props.Participants, 'Controller'));
            changeManager(findParticipantByRole(props.Participants, 'Manager'));
            changeExecutors(findParticipantsByRole(props.Participants, 'Worker'));
        }
    }, [isEdit]);

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
                        <TngUserSelect onChangeSelectedUser={changeInitiator} selectedUsers={initiator} />
                    </div>
                </div>
                <div className="project-curator content__grid-item">
                    <div className="project-modal__label">Куратор:</div>
                    <div className="project-curator__input">
                        <TngUserSelect onChangeSelectedUser={changeCurator} selectedUsers={curator} />
                    </div>
                </div>
                <div className="project-customer content__grid-item">
                    <div className="project-modal__label">Заказчик:</div>
                    <div className="project-customer__input">
                        <TngUserSelect onChangeSelectedUser={changeCustomer} selectedUsers={customer} />
                    </div>
                </div>
                <div className="project-goal content__grid-item">
                    <div className="project-modal__label">Цель проекта:</div>
                    <div className="project-goal__input">
                        <TngInput value={projectGoal} changeValue={changeProjectGoal} />
                    </div>
                </div>
                <div className="project-customer-contact content__grid-item">
                    <div className="project-modal__label">Контактное лицо заказчика:</div>
                    <div className="project-customer-contact__input">
                        <TngUserSelect onChangeSelectedUser={changeCustomerContact} selectedUsers={customerContact} />
                    </div>
                </div>
                <div className="project-controller content__grid-item">
                    <div className="project-modal__label">Контролёр проекта:</div>
                    <div className="project-controller__input">
                        <TngUserSelect onChangeSelectedUser={changeController} selectedUsers={controller} />
                    </div>
                </div>
                <div className="project-manager content__grid-item">
                    <div className="project-modal__label">Руководитель проекта:</div>
                    <div className="project-manager__input">
                        <TngUserSelect onChangeSelectedUser={changeManager} selectedUsers={manager} />
                    </div>
                </div>
                <div className="project-description content__grid-item">
                    <div className="project-modal__label">Описание проекта:</div>
                    <div className="project-description__input">
                        <TngInput multiline value={projectDescription} changeValue={changeProjectDescription} />
                    </div>
                </div>
                <div className="project-result content__grid-item">
                    <div className="project-modal__label">Ожидаемый результат:</div>
                    <div className="project-result__input">
                        <TngInput value={projectResult} changeValue={changeProjectResult} />
                    </div>
                </div>
                <div className="project-executors content__grid-item">
                    <div className="project-modal__label">Исполнители:</div>
                    <div className="project-executors__input">
                        <TngUserSelect multiUsers onChangeSelectedUser={changeExecutors} selectedUsers={executors} />
                    </div>
                </div>
                <div className="project-product content__grid-item">
                    <div className="project-modal__label">Ожидаемый продукт:</div>
                    <div className="project-product__input">
                        <TngInput value={projectProduct} changeValue={changeProjectProduct} />
                    </div>
                </div>
                <div className="project-cost content__grid-item">
                    <div className="project-modal__label">Стоимость проекта:</div>
                    <div className="project-cost__input">
                        <TngInput value={projectCost} changeValue={changeProjectCost} />
                    </div>
                </div>
                <div className="project-economic-effect content__grid-item">
                    <div className="project-modal__label">Экономической эффект:</div>
                    <div className="project-economic-effect__input">
                        <TngInput value={economicEffect} changeValue={changeEconomicEffect} />
                    </div>
                </div>
                <div className="project-meeting-place content__grid-item">
                    <div className="project-modal__label">Место проведения совещания:</div>
                    <div className="project-meeting-place__input">
                        <TngInput value={meetingPlace} changeValue={changeMeetingPlace} />
                    </div>
                </div>
                <div className="project-meeting-periodicity content__grid-item">
                    <div className="project-modal__label">Периодичность совещаний:</div>
                    <div className="project-meeting-periodicity__input">
                        <TngInput value={meetingPeriodicity} changeValue={changeMeetingPeriodicity} />
                    </div>
                </div>
                <div className="project-end-date content__grid-item">
                    <div className="project-modal__label">Дата окончания проекта:</div>
                    <div className="project-end-date__input">
                        <DatePicker value={projectEndDate} onDayChange={changeProjectEndDate} />
                    </div>
                </div>
                <div className="project-milestones content__grid-item">
                    <div className="project-modal__label">Вехи проета:</div>
                    <div className="project-milestones__input">
                        <MilestonesInput onAddMilestone={onAddMilestone} milestones={milestones} />
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
                <SubmitButton className="footer__button" onClick={onSendToAgreement}>
                    <span className="button__content">
                        Отправить на согласование
                    </span>
                </SubmitButton>
            </div>
        </div>
    );
};

export default CreateProjectModalContent;
