type PendingState = {
  status: 'pending';
}

type LoadingState = {
  status: 'loading';
}

type SuccessState = {
  status: 'success';
  data: Book[];
}

type ErrorState = {
  status: 'error';
  error: any;
}

type State = PendingState | LoadingState | SuccessState | ErrorState;

<!-- literal types -->
type Loading = 'idle' | 'loading';
type status = 'pending' | 'loading' | 'error' | 'success';
