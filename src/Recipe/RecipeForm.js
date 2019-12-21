import React, {Component} from 'react';

class RecipeForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <form>
                <table>
                    <tr>
                        <td> title</td>
                        <td><input type="text" name="title" value="title"/></td>
                    </tr>
                    <tr>
                        <td>Instructions</td>
                        <td><textarea name="instruction" value="instruction"></textarea></td>
                    </tr>
                    <tr>
                        <td>Ingredient</td>
                        <td><input type="text" value=""/>></td>
                    </tr>
                    <tr>
                        <td>Ingredient</td>
                        <td><input type="text" value="ingredient"/>></td>
                    </tr>

                    <tr>
                        <td>
                            <button type="submit" name="submit"/>
                        </td>
                    </tr>
                </table>

            </form>
        </div>);
    }
}
