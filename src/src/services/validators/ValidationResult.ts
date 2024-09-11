interface IValidationResult {
  isValid: boolean
  message: string[]
}

class ValidationResult implements IValidationResult {
  constructor(
    public isValid: boolean,
    public message: string[]
  ) {}
}

export default ValidationResult
export type { IValidationResult }
