import { createSelector } from "@ngrx/store";

export const selectSurveyState = (state) => state.survey;

export const activeSurveySelector = createSelector(
  selectSurveyState,
  currentSurveyAttr => currentSurveyAttr,
  list => list,
  surveyInfo => surveyInfo
);

export const contentActivitySelector = createSelector(
  selectSurveyState,
  selector => selector.contentActivities
)

export const schoolSelector = createSelector(
  selectSurveyState,
  selector => selector.schools
)

