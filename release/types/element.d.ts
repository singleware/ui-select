import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';
import * as Internals from './internals';
import { Option } from './option';
/**
 * Select element.
 */
export declare class Element extends Control.Element {
    /**
     * Default text for no selections in the text input.
     */
    private defaultText;
    /**
     * Default nodes for no selections in the button input.
     */
    private defaultNodes;
    /**
     * Map of options.
     */
    private optionsMap;
    /**
     * List of active options.
     */
    private activatedList;
    /**
     * Map of entity group by name.
     */
    private groupsMap;
    /**
     * Map of element group by entity group.
     */
    private groupElementMap;
    /**
     * Map of element option by entity option.
     */
    private optionElementMap;
    /**
     * Current option selected.
     */
    private selectedOption?;
    /**
     * Current element selected.
     */
    private selectedElement?;
    /**
     * Determines whether the result or empty element slot can be closed or not.
     */
    private canClose;
    /**
     * Element styles.
     */
    private styles;
    /**
     * Input slot element.
     */
    private inputSlot;
    /**
     * Arrow slot element.
     */
    private arrowSlot;
    /**
     * Unselect slot element.
     */
    private unselectSlot;
    /**
     * Search slot element.
     */
    private searchSlot;
    /**
     * Result slot element.
     */
    private resultSlot;
    /**
     * Empty slot element.
     */
    private emptySlot;
    /**
     * Select layout element.
     */
    private selectLayout;
    /**
     * Select styles element.
     */
    private selectStyles;
    /**
     * Update all validation attributes.
     */
    private updateValidation;
    /**
     * Updates the input element with the specified option entity.
     * @param option Option entity.
     */
    private updateInputSelection;
    /**
     * Updates the result element with any option found.
     */
    private updateResultList;
    /**
     * Renders a new option element for the specified option entity.
     * @param option Option entity.
     * @returns Returns the rendered option element.
     */
    private renderOptionElement;
    /**
     * Renders a new selection result for the specified option entity.
     * @param option Option entity.
     * @returns Returns the rendered selection result.
     */
    private renderSelectionElement;
    /**
     * Renders a new group element for the specified group entity.
     * @param group Group entity.
     * @returns Returns the rendered group element.
     */
    private renderGroupElement;
    /**
     * Selects the element that corresponds to the specified option entity.
     * @param option Option entity.
     */
    private selectOption;
    /**
     * Selects the option that corresponds to the specified value.
     * @param value Option value.
     * @returns Returns true when an option was selected, false otherwise.
     */
    private selectOptionByValue;
    /**
     * Selects the element that corresponds to the specified option and notifies the change.
     * @param option Option entity.
     * @returns Returns true when some option was selected, false otherwise.
     */
    private selectOptionAndNotify;
    /**
     * Selects the previous option.
     * @returns Returns true when some option was selected, false otherwise.
     */
    private selectPreviousOptionAndNotify;
    /**
     * Selects the next option.
     * @returns Returns true when some option was selected, false otherwise.
     */
    private selectNextOptionAndNotify;
    /**
     * Selects the next first option that corresponds to the specified search.
     * @param search Search value.
     * @returns Returns true when some option was selected, false otherwise.
     */
    private selectNextOptionBySearchAndNotify;
    /**
     * Unselects the current option, element and notifies the change.
     * @returns Returns true when the current option was unselected, false otherwise.
     */
    private unselectOptionAndNotify;
    /**
     * Unselects the current selected option.
     */
    private unselectOption;
    /**
     * Opens the option list result.
     */
    private openList;
    /**
     * Closes the option list result.
     */
    private closeList;
    /**
     * Gets the normalized tag list based on the specified input tags.
     * @param inputs Input tags.
     * @returns Returns the generated tag list.
     */
    private getTagList;
    /**
     * Option click, event handler.
     * @param option Option entity.
     */
    private optionClickHandler;
    /**
     * Option keydown, event handler.
     * @param event Event instance.
     */
    private optionKeydownHandler;
    /**
     * Updates the current selection into the new input slot element.
     */
    private slotChangeHandler;
    /**
     * Prevent close, event handler.
     */
    private preventCloseHandler;
    /**
     * Focus list, event handler.
     */
    private focusListHandler;
    /**
     * Blur list, event handler.
     */
    private blurListHandler;
    /**
     * Opens the list, event handler.
     */
    private openListHandler;
    /**
     * Closes the list, event handler.
     */
    private closeListHandler;
    /**
     * Toggles the list, event handler.
     */
    private toggleListHandler;
    /**
     * Unselect current option, event handler.
     */
    private unselectHandler;
    /**
     * Default constructor.
     */
    constructor();
    /**
     * Gets the selected option.
     */
    get selection(): Internals.Option | undefined;
    /**
     * Gets the current search text.
     */
    get search(): string;
    /**
     * Gets the opened state.
     */
    get opened(): boolean;
    /**
     * Gets the options found state.
     */
    get found(): boolean;
    /**
     * Gets the number of active options.
     */
    get count(): number;
    /**
     * Determines whether the element is empty or not.
     */
    get empty(): boolean;
    /**
     * Gets the element name.
     */
    get name(): string;
    /**
     * Sets the element name.
     */
    set name(name: string);
    /**
     * Gets the element value.
     */
    get value(): string | undefined;
    /**
     * Sets the element value.
     */
    set value(value: string | undefined);
    /**
     * Default value for resets.
     */
    defaultValue: any;
    /**
     * Gets the searchable state of the element.
     */
    get searchable(): boolean;
    /**
     * Sets the searchable state of the element.
     */
    set searchable(state: boolean);
    /**
     * Gets the required state of the element.
     */
    get required(): boolean;
    /**
     * Sets the required state of the element.
     */
    set required(state: boolean);
    /**
     * Gets the read-only state of the element.
     */
    get readOnly(): boolean;
    /**
     * Sets the read-only state of the element.
     */
    set readOnly(state: boolean);
    /**
     * Gets the disabled state of the element.
     */
    get disabled(): boolean;
    /**
     * Sets the disabled state of the element.
     */
    set disabled(state: boolean);
    /**
     * Move the focus to this element.
     */
    focus(): void;
    /**
     * Reset the element value to its initial value.
     */
    reset(): void;
    /**
     * Checks the element validity.
     * @returns Returns true when the element is valid, false otherwise.
     */
    checkValidity(): boolean;
    /**
     * Sets the element custom validity error message.
     * @param error Custom error message.
     */
    setCustomValidity(error?: string): void;
    /**
     * Adds the specified group into the groups list.
     * @param name Group name.
     * @param label Group label.
     */
    addGroup(name: string, label: string | JSX.Element): void;
    /**
     * Adds the specified option into the options list.
     * @param value Option value.
     * @param label Option label.
     * @param data Option metadata.
     * @returns Returns true when the option has been added, false otherwise.
     */
    addOption(value: string, label: string | JSX.Element, data?: Internals.Metadata): boolean;
    /**
     * Add the specified option list.
     * @param option Options list.
     */
    addOptions(options: (Option | string)[]): void;
    /**
     * Remove all options that corresponds to the specified option value.
     * @param value Option value.
     * @returns Returns true when some option was removed or false otherwise.
     */
    removeOption(value: string): boolean;
    /**
     * Clear all options.
     */
    clear(): void;
    /**
     * Opens the options list.
     * @returns Returns true when the options list was closed, false otherwise.
     */
    open(): boolean;
    /**
     * Closes the options list.
     * @returns Returns true when the options list was closed, false otherwise.
     */
    close(): boolean;
    /**
     * Toggles the options list.
     */
    toggle(): void;
}
