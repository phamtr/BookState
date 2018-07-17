import { Action, State, StateContext } from '@ngxs/store'
import { AddTutorial } from './TutorialState.actions'

export class TutorialStateModel {
  tutorial: any[]
}

@State<TutorialStateModel>({
  name: 'tutorial',
  defaults: {
    tutorial: [],
  }
})
export class TutorialState {

  @Action(AddTutorial)
  addTutorial({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
    const state = getState();
    patchState({
      tutorial: [...state.tutorial, payload]
    });
    console.log('tutorial state patched')
  }

}