import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getAddNewCommentText } from '../../model/selectors/addNewCommentSelector'
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
	className?: string
	onSendComment: (text: string) => void
}

const reducers: ReducersList = {
	addNewComment: addNewCommentReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { className, onSendComment } = props
	const { t } = useTranslation('article')

	const dispatch = useAppDispatch()
	const text = useSelector(getAddNewCommentText)

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addNewCommentActions.setText(value))
	}, [dispatch])

	const onSendCommentHandler = useCallback(() => {
		onSendComment(text || '')
		onCommentTextChange('')
	}, [text, onSendComment, onCommentTextChange])

	return (
		<DynamicModuleLoader reducers={reducers}>

			<div
				className={classNames(cls.AddCommentForm, {}, [className])}
			>
				<Input
					placeholder={t('enter comment')}
					className={cls.commentInput}
					value={text}
					onChange={onCommentTextChange}

				/>
				<Button
					onClick={onSendCommentHandler}
					className={cls.btn}
					theme={ButtonTheme.BACKGROUND}
				>
					{t('add comment')}
				</Button>
			</div>
		</DynamicModuleLoader>
	)
})

export default AddCommentForm
