/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable no-mixed-operators */

import React, { useEffect, useState } from 'react';

import { formatDateToString } from '../../helpers/helpers';
import { getColorsArray } from '../../helpers/colors';

import './GanttChart.scss';

const CELL_WIDTH = 50;

const getTaskListItemWidth = (taskDuration) => `${taskDuration * CELL_WIDTH}px`;
const getTaskListItemOffset = (taskOffsetDuration) => `${taskOffsetDuration * CELL_WIDTH}px`;

const getDateRangeCount = (dayStart, dayEnd) => (dayEnd - dayStart) / 86400000 + 1;

const getDatesArray = (dateStart, dateEnd) => {
    const startDay = new Date(dateStart);
    const endDay = new Date(dateEnd);
    const daysCount = getDateRangeCount(startDay, endDay);
    const dates = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < daysCount; i++) {
        const curDay = new Date(startDay);
        curDay.setDate(curDay.getDate() + i);

        dates.push(curDay);
    }

    return dates;
};

const format = (day) => formatDateToString(day).split('.').slice(0, 2).join('.');

const renderDaysList = (days) => days.map((day, index) => (
    <li className="days-list__item" key={index}>
        {
            format(day)
        }
    </li>
));

const renderTasks = (tasks, startDate, colors) => tasks.map((task, index) => {
    const taskDuration = getDateRangeCount(new Date(task.DateBegin), new Date(task.DateEnd));
    const taskOffset = getDateRangeCount(startDate, new Date(task.DateBegin)) - 1;

    const styles = colors[index] && {
        width: getTaskListItemWidth(taskDuration),
        left: getTaskListItemOffset(taskOffset),
        backgroundColor: colors[index].color,
        background: `linear-gradient(45deg, ${colors[index].gradientStart} 0%, ${colors[index].gradientEnd} 50%, ${colors[index].color} 100%)`,
    } || {};

    return (
        <li key={`task-${index}`} className="tasks-list__item" style={styles} />
    );
});

const renderPerformers = (tasks, colors) => tasks.map((task, index) => {
    const style = colors[index] && {
        backgroundColor: colors[index].color,
        background: `linear-gradient(45deg, ${colors[index].gradientStart} 0%, ${colors[index].gradientEnd} 50%, ${colors[index].color} 100%)`,
    } || {};

    return (
        <li key={`performer-${index}`} className="task-performers__item">
            <div className="task-performers__task-info">
                <span className="task-color" style={style} />
                <span className="task-name">
                    {
                        task.Name || 'Нет имени задачи'
                    }
                </span>
            </div>
            <div className="task-performers__performer">
                { (task.Performer && task.Performer.Name) || 'Нет исполнителя задачи' }
            </div>
        </li>
    );
});

const GanttChart = ({ ProjectTasks }) => {
    const [colors, setColors] = useState(0);
    const scheduleTasks = ProjectTasks.slice().filter((task) => (new Date(task.DateEnd) > (new Date(task.DateBegin))));
    scheduleTasks.sort((taskA, taskB) => (new Date(taskA.DateBegin)) - (new Date(taskB.DateBegin)));

    if (scheduleTasks.length === 0) {
        return null;
    }

    const datesArray = getDatesArray(scheduleTasks[0].DateBegin, scheduleTasks[scheduleTasks.length - 1].DateEnd);

    useEffect(() => {
        setColors(getColorsArray(ProjectTasks && ProjectTasks.length));
    }, []);

    return (
        <div className="grantt-chart">
            <div className="grantt-chart__chart">
                <ul className="grantt-chart__days-list">
                    {
                        renderDaysList(datesArray)
                    }
                </ul>
                <ul className="grantt-chart__tasks-list">
                    {
                        renderTasks(scheduleTasks, new Date(scheduleTasks[0].DateBegin), colors)
                    }
                </ul>
            </div>
            <div className="grantt-chart__legend">
                <ul className="grantt-chart__task-performers">
                    {
                        renderPerformers(scheduleTasks, colors)
                    }
                </ul>
            </div>
        </div>
    );
};

export default GanttChart;
