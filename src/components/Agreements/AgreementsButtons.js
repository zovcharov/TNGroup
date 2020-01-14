/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const AGREEMENT_RESULTS = {
    ACCEPTED: 'ACCEPTED',
    REJECTED: 'REJECTED',
    NOT_VOTED: 'NOT_VOTED',
    NOT_AVAILABLE: 'NOT_AVAILABLE',
};

const getAgreementResult = (performanceList, userId) => {
    // eslint-disable-next-line consistent-return
    for (let i = 0; i < performanceList.length; i += 1) {
        const { ProjectUserRole } = performanceList[i];

        if (!ProjectUserRole) {
            return AGREEMENT_RESULTS.NOT_AVAILABLE;
        }

        if (ProjectUserRole.EmployeeId === userId) {
            if (performanceList[i].Result === 1) {
                return AGREEMENT_RESULTS.ACCEPTED;
            }
            if (performanceList[i].Result === 2) {
                return AGREEMENT_RESULTS.REJECTED;
            }
            return AGREEMENT_RESULTS.NOT_VOTED;
        }
    }
};

const AgreementsButtons = (props) => {
    const {
        onAcceptAgreement,
        onDeclineAgreement,
        agreementId,
        projectId,
        performanceList,
        userId,
        updateAgreementsList,
    } = props;

    const result = getAgreementResult(performanceList, userId);

    if (result === AGREEMENT_RESULTS.ACCEPTED) {
        return (
            <div className="agreement-decisions">
                <div
                    className="agreement-decisions__button agreement-decisions__button_result_voted agreement-decisions__button_type_accept"
                />
            </div>
        );
    }

    if (result === AGREEMENT_RESULTS.REJECTED) {
        return (
            <div className="agreement-decisions">
                <div
                    className="agreement-decisions__button agreement-decisions__button_result_voted agreement-decisions__button_type_decline"
                />
            </div>
        );
    }

    if (result === AGREEMENT_RESULTS.NOT_AVAILABLE) {
        return null;
    }

    const onAccept = () => {
        onAcceptAgreement(agreementId, projectId)
            .then(() => {
                updateAgreementsList();
            });
    };

    const onDecline = () => {
        onDeclineAgreement(agreementId, projectId)
            .then(() => {
                updateAgreementsList();
            });
    };

    return (
        <div className="agreement-decisions">
            <div
                className="agreement-decisions__button agreement-decisions__button_type_accept"
                onClick={onAccept}
            />
            <div
                className="agreement-decisions__button agreement-decisions__button_type_decline"
                onClick={onDecline}
            />
        </div>
    );
};

export default AgreementsButtons;
